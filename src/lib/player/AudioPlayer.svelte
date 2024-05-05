<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import Play from "svelte-material-icons/Play.svelte";
    import Pause from "svelte-material-icons/Pause.svelte";
    import SkipNext from "svelte-material-icons/SkipNext.svelte";
    import SkipPrevious from "svelte-material-icons/SkipPrevious.svelte";
    import VolumeHigh from "svelte-material-icons/VolumeHigh.svelte";
    import VolumeMedium from "svelte-material-icons/VolumeMedium.svelte";
    import VolumeLow from "svelte-material-icons/VolumeLow.svelte";
    import VolumeOff from "svelte-material-icons/VolumeOff.svelte";
    import PlaylistMusic from "svelte-material-icons/PlaylistMusic.svelte";
    import PlaylistMusicOutlined from "svelte-material-icons/PlaylistMusicOutline.svelte";
    import Repeat from "svelte-material-icons/Repeat.svelte";
    import RepeatOff from "svelte-material-icons/RepeatOff.svelte";
    import RepeatOnce from "svelte-material-icons/RepeatOnce.svelte";
    import Shuffle from "svelte-material-icons/Shuffle.svelte";
    import Castle from "../../assets/Castle.svelte";
  
    import clockFace from "../../assets/smallWorldClockface.png";
    import { albums, parseChapters, type TrackData } from "../../assets/Audio";
    import { audioStore, audioStorePosition, audioElem, repeat, openAlbum } from "../../AudioStore";
    import Queue from './Queue.svelte';
    import Seekbar from './Seekbar.svelte';
    import DisneylandReverb from './reverb';
    import ImmersionPopup from './ImmersionPopup.svelte';
    
    let progress = 0;
    let duration = 0.01;
    let track: TrackData = $audioStore[0];
  
    let audio = $audioElem;
    let titleElem = document.querySelector("title");
    let audioPlayer;
    let paused = true;
    let fullscreen = false;
  
    // Audio listeners
    function onEnded() {
      // Play automatically the next track when audio ends.
      if ($repeat === "once") {
        audio.currentTime = 0;
        audio.play();
      } else if ($repeat === "on") {
        audioStorePosition.set(($audioStorePosition + 1) % $audioStore.length);
      } else if ($audioStorePosition < $audioStore.length - 1) {
        audioStorePosition.set($audioStorePosition + 1);
      } else {
        titleElem.textContent = "Sounds of the DLR";
      }
    }
    function onPlay() {
      paused = false;
      navigator.mediaSession.playbackState = "playing";
      titleElem.textContent = `${track.title} - Sounds of the DLR`;
    }
    function onPause() {
      paused = true;
      navigator.mediaSession.playbackState = "paused";
      titleElem.textContent = "Sounds of the DLR";
    }
    function onTimeUpdate() {
      progress = audio.currentTime;
      duration = audio.duration || 0.01;
      detectChapter();
    }
  
    // activate scroller
    function updateScroller() {
      if (
        (window.innerWidth > 700 && window.innerWidth * 0.3 - 200 < scroller.clientWidth) ||
        (window.innerWidth < 700 && window.innerWidth - 167 < scroller.clientWidth)
      ) {
        scroller.style.animation = "";
      } else {
        scroller.style.animation = "none";
      }
    }
    let scroller: HTMLElement;
  
    let reverb = new DisneylandReverb(audio);
    onMount(() => {
      audio = $audioElem;
      // Append child to document to allow media controls
      // (MediaSession requires an element to work?)
      audioPlayer.appendChild(audio);
  
      if (localStorage.getItem("volume")) {
        audio.volume = parseFloat(localStorage.getItem("volume"));
      }
      audio.addEventListener('play', onPlay);
      audio.addEventListener('pause', onPause);
      audio.addEventListener('ended', onEnded);
      audio.addEventListener('timeupdate', onTimeUpdate);
      audio.addEventListener('loadedmetadata', updateMetadata);
      audio.addEventListener('loaded', updateMetadata);
      window.addEventListener('resize', updateScroller);
      setMediaControlHandlers();
      updateScroller();
    })
  
    const unsubscribeAudio = audioStore.subscribe((value) => {
      let position = $audioStorePosition;
      if (position > value.length - 1) {
        audioStorePosition.set(0);
        position = 0;
      }
      if (value[position] && value[position].mp3 !== track.mp3) {
        track = value[position];
        play();
      }
    });
    const unsubscribePosition = audioStorePosition.subscribe((value) => {
      if ($audioStore[value] && $audioStore[value].mp3 !== track.mp3) {
        track = $audioStore[value];
        play();
      }
    });
  
    onDestroy(() => {
      unsubscribeAudio();
      unsubscribePosition();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', updateMetadata);
      audio.removeEventListener('loaded', updateMetadata);
      window.removeEventListener('resize', updateScroller);
      reverb.destroy();
    });
  
    // play the audio.
    async function play() {
      if (!decodeURIComponent(audio.src).includes(track.mp3)) {
        audio.src = track.mp3;
      }
      chapters = track.chapters ? parseChapters(track.chapters) : null;
  
      updateMetadata();
      await audio.play();
      paused = false;
      progress = audio.currentTime;
      duration = audio.duration || 100;
      updateMetadata();
      setTimeout(() => updateScroller(), 0);
    }
  
    async function pause() {
      await audio.pause();
      paused = true;
    }
  
    // update metadata for media controls.
    function updateMetadata() {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: track.title,
        artist: track.artist,
        album: track.album.name,
        artwork: [{src: track.album.poster, sizes: "500x500", type: "image/jpeg"}]
      });
  
      updatePositionState();
    }
  
    // update the position state for media controls.
    function updatePositionState() {
      if ('setPositionState' in navigator.mediaSession) {
        navigator.mediaSession.setPositionState({
          duration: duration || progress,
          playbackRate: audio.playbackRate,
          position: progress
        });
      }
    }
  
    async function previousTrack() {
      audioStorePosition.set(($audioStorePosition - 1 + $audioStore.length) % $audioStore.length);
      await play();
    }
    async function nextTrack() {
      audioStorePosition.set(($audioStorePosition + 1) % $audioStore.length);
      await play();
    }
  
    function setMediaControlHandlers() {
      // previous track.
      navigator.mediaSession.setActionHandler('previoustrack', previousTrack);
      navigator.mediaSession.setActionHandler('nexttrack', nextTrack);
  
      /* Play & Pause */
      navigator.mediaSession.setActionHandler('play', play);
      navigator.mediaSession.setActionHandler('pause', pause);
  
      /* Seek To (supported since Chrome 78) */
  
      navigator.mediaSession.setActionHandler('seekto', function(event) {
        if (event.fastSeek && ('fastSeek' in audio)) {
          audio.fastSeek(event.seekTime);
          return;
        }
        audio.currentTime = event.seekTime;
        duration = audio.duration;
        progress = audio.currentTime;
        updatePositionState();
      });
    }

    function shuffleQueue() {
      let pos = $audioStorePosition;
      audioStore.update((value) => {
        let shuffled = value.filter((v, i) => i !== pos).sort(() => Math.random() - 0.5);
        audioStorePosition.set(0);
        return [value[pos], ...shuffled];
      });
    }
  
    /* queue */
    let showingQueue = false;
  
    /* volume */
    let showingVolume = false;
  
    function changeVolume(e:any) {
      // save volume to localStorage
      localStorage.setItem("volume", e.target.value);
    }

    /* chapters */
    let chapters = track.chapters ? parseChapters(track.chapters) : null;
    let currentChapter = null;
    function detectChapter() {
      if (!$audioElem.duration || !chapters) return;
      
      for (let i = 0; i < chapters.length; i++) {
        if ($audioElem.currentTime >= chapters[i].startTime) {
          currentChapter = i;
        }
      }
    }
  
  
    /* handle key presses */
    function handleKeyUp(e) {
      switch(e.key) {
        case " ":
          if (paused) {
            play();
          } else {
            pause();
          }
          break;
        case "ArrowLeft":
          if (e.ctrlKey) {
            previousTrack();
          } else {
            audio.currentTime -= 5;
          }
          break;
        case "ArrowRight":
          if (e.ctrlKey) {
            nextTrack();
          } else {
            audio.currentTime += 5;
          }
          break;
        case "Escape":
          fullscreen = false;
          break;
        case "q":
          showingQueue = !showingQueue;
          break;
        default:
          return;
      }
      e.preventDefault();
      e.stopPropagation();
    }
  </script>
  
  <div
    class="audioPlayer"
    class:fullscreen={fullscreen}
    on:click={(e) => { if (window.innerWidth < 700 && !fullscreen) { fullscreen = true; }; e.stopPropagation() } }
    bind:this={audioPlayer}
    on:touchstart={(e) => e.stopPropagation()}
  >
    <div class="mobileSeekbar">
      <div class="mobileSeekbarInner" style={`width: ${(progress / duration) * 100}%`} />
    </div>
    <div class="trackInfo">
      <div class="albumImage">
        {#if (audio.readyState >= 3 || audio.currentTime !== 0)}
        <img style="cursor: pointer" alt={track.title} src={track.poster} on:click={() => { setTimeout(() => fullscreen = !fullscreen, 0); setTimeout(updateScroller, 100)}} />
        {:else}
        <img style="cursor: pointer" class="loadingClock" alt="Loading" src={clockFace} on:click={() => { setTimeout(() => fullscreen = !fullscreen, 0); setTimeout(updateScroller, 100)}} />
        {/if}
      </div>
      <div class="title" on:click={() => { setTimeout(() => fullscreen = false, 0); openAlbum.set(albums.filter(a => a.name === track.album.name)[0])} }>
        <h3 title={track.title}>
          <span
            class="scroller"
            bind:this={scroller}
          >
            {track.title}
          </span>
        </h3>
        <h3 class="album">{chapters !== null && currentChapter !== null && currentChapter !== -1 ? chapters[currentChapter].name : track.album.name}</h3>
      </div>
    </div>
    <div class="centerBar">
      <div class="playbackActions">
        <button title="Shuffle queue" on:click={shuffleQueue}>
          <Shuffle size={24} />
        </button>
        <button on:click={() => { if (audio.currentTime > 3) { audio.currentTime = 0 } else { previousTrack() }}}><SkipPrevious size={24} /></button>
        <button class="playBtn" on:click={(e) => { if (audio.paused) { play() } else { pause() }; e.stopPropagation() } }>
          {#if (paused)}
          <Play />
          {:else}
          <Pause />
          {/if}
        </button>
        <button on:click={nextTrack}><SkipNext size={24} /></button>
        <button class:active={$repeat !== "off"} title="Repeat setting" on:click={() => repeat.update((value) => ["off", "on", "once"][(["off", "on", "once"].indexOf(value) + 1) % 3])}>
          {#if $repeat === "on"}
          <Repeat size={24} />
          {:else if $repeat === "once"}
          <RepeatOnce size={24} />
          {:else}
          <RepeatOff size={24} />
          {/if}
        </button>
      </div>
      <Seekbar bind:progress={progress} bind:duration={duration} chapters={chapters} audio={audio} updatePositionState={updatePositionState} />
    </div>
    <div class="actions">
      <button
        on:touchstart={() => { if (showingVolume) showingVolume = false}}
        on:mouseenter={() => showingVolume = true}
        on:mouseleave={() => showingVolume = false}
      >
        {#if (audio.volume > 0.7)}
        <VolumeHigh />
        {:else if (audio.volume > 0.2)}
        <VolumeMedium />
        {:else if (audio.volume > 0)}
        <VolumeLow />
        {:else}
        <VolumeOff />
        {/if}
        {#if showingVolume}
        <div class="volume">
          {#if (audio.volume > 0.7)}
          <VolumeHigh />
          {:else if (audio.volume > 0.2)}
          <VolumeMedium />
          {:else if (audio.volume > 0)}
          <VolumeLow />
          {:else}
          <VolumeOff />
          {/if}
          <input
            on:touchstart={(e) => { e.stopPropagation()}}
            type="range"
            min="0"
            max="1"
            step="0.01"
            on:change={changeVolume}
            bind:value={audio.volume}
          />
        </div>
        {/if}
      </button>
      <button class="immersiveMode" class:active={reverb.enabled} title="Immerse yourself in the parks!" on:click={() => reverb.enabled = reverb.toggle()}>
        <Castle />
      </button>
      <button on:click={() => showingQueue = !showingQueue}>
        {#if (showingQueue)}
        <PlaylistMusic />
        {/if}
        {#if (!showingQueue)}
        <PlaylistMusicOutlined />
        {/if}
      </button>
    </div>
    <Queue shown={showingQueue} onShown={(newState) => showingQueue = newState} />
  </div>
  <ImmersionPopup />
  
  <svelte:window
    on:keydown={handleKeyUp}
    on:touchstart={() => { showingQueue = false; showingVolume = false}}
    on:click={() => { showingQueue = false; showingVolume = false}}
  />
  
  <style>
    .audioPlayer {
      position: fixed;
      bottom: 0;
      width: 100%;
      display: grid;
      grid-template-columns: calc(25% - 10px) calc(50% - 20px) calc(25% - 10px);
      align-items: center;
      gap: 20px;
      z-index: 10;
      background-color: var(--alternate);
      transition: height 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
      padding-bottom: var(--safe-margin-bottom);
  
      height: 75px;
    }
    .mobileSeekbar {
      display: none;
    }
    .audioPlayer img {
      margin: 5px;
      border-radius: 5px;
      width: 65px;
      height: 65px;
    }
    .audioPlayer img:not(.loadingClock) {
      animation: popIn 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    @keyframes popIn {
      0% { transform: scale(0.5) }
      100% { transform: scale(1); }
    }
    .loadingClock {
      animation: clock 4s infinite;
      animation-direction: reverse;
      transform:rotate(25deg);
    }

    @keyframes clock {
      50% { transform: rotate(-25deg) }
    }
    .audioPlayer button {
      margin: 0;
      padding: 0;
      background-color: transparent;
      color: #e0e0e0;
      line-height: 0;
      border: 0;
      font-size: 32px;
      cursor: pointer;
      position: relative;
    }
    :global(.audioPlayer button svg) {
      flex-shrink: 0;
    }
    .audioPlayer button.active {
      color: var(--primary);
    }
    .audioPlayer button:hover {
      filter: brightness(1.2);
    }
    button.playBtn {
      background-color: #e0e0e0;
      transition: background-color 0.1s ease-in-out;
      color: #111;
      padding: 0 10px;
      border-radius: 30px;
    }
    button.playBtn:hover {
      box-shadow: none;
      background-color: #fff;
      color: black;
    }
    .audioPlayer .volume {
      display: flex;
      flex-direction: row;
      gap: 10px;
  
      position: absolute;
      z-index: 100;
      bottom: 100%;
      left: -20px;
      background-color: var(--alternate-dark);
      border: 1px solid var(--border);
      border-radius: 5px;
      padding: 10px 10px;
      line-height: 0;
      transform: translateX(-62px) translateY(-1.77rem) rotate(-90deg);
    }
    .audioPlayer.fullscreen .volume {
      transform: translateX(-62px) translateY(-0.25rem) rotate(-90deg);
    }
    .trackInfo, .actions, .centerBar {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }
    .centerBar {
      width: 100%;
      gap: unset;
      flex-direction: column;
    }
    .actions {
      justify-content: flex-end;
      padding-right: 20px;
      width: calc(100% - 20px);
    }
    .playbackActions {
      display: flex;
      flex-direction: row;
      gap: 3vw;
    }
    .title {
      display: flex;
      width: 100%;
      overflow: hidden;
      flex-direction: column;
      box-sizing: border-box;
      flex-shrink: 1;
      cursor: pointer;
    }
    .title h3 {
      margin: 0;
      font-weight: normal;
      text-align: left;
      /* prevent wrapping */
      white-space: nowrap;
      overflow: hidden;
    }
    .title .scroller {
      display: inline-block;
      animation: scroll 13s linear infinite;
      animation-delay: -5s;
    }
    .title .album {
      font-size: 0.9em;
      color: #888;
      max-width: 100%;
    }
    .albumImage {
      width: 75px;
      height: 75px;
    }
    @keyframes scroll {
      0% { transform: translateX(100%); }
      40% { transform: translateX(0%); }
      60% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
  
    /* fullscreen */
    .audioPlayer.fullscreen:after {
      position: fixed;
      color: #888;
      content: "Sounds of the DLR - tap the image again to close";
      top: 10px;
      width: calc(100% - 20px);
      text-align: right;
    }
    .audioPlayer.fullscreen {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      justify-content: center;
    }
    .audioPlayer.fullscreen .albumImage, .audioPlayer.fullscreen .albumImage img {
      width: min(500px, calc(90vw / 3));
      height: unset;
      margin: 0 5%;
      border-radius: 20px;
    }
    .audioPlayer.fullscreen .trackInfo {
      position: absolute;
      top: calc(50% - 40px);
      left: 0;
      transform: translateY(-50%);
      width: calc(100% - 20px);
      gap: 20px;
    }
    .audioPlayer.fullscreen .title h3 {
      width: 100vw;
      font-size: 2em;
      line-height: 1.2em;
      overflow: visible;
      white-space: initial;
    }
    .audioPlayer.fullscreen .scroller {
      animation: none;
      max-width: 100%;
      display: block;
    }
    .audioPlayer.fullscreen .scroller span {
      display: block;
    }
    .audioPlayer.fullscreen .actions, .audioPlayer.fullscreen .centerBar {
      position: absolute;
      bottom: 50px;
    }
    .audioPlayer.fullscreen .actions {
      right: 0;
      width: 100px;
    }
    .audioPlayer.fullscreen button {
      font-size: 2.5em;
    }
    :global(.audioPlayer button.active svg) {
      fill: var(--primary) !important;
    }

    .immersiveMode.active {
      animation: pop 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    @keyframes pop {
      0% { transform: scale(1.5) }
      100% { transform: scale(1); }
    }
    .immersiveMode.active:before {
      content: "☀️";
      opacity: 0;
      pointer-events: none;
      position: absolute;
      left: 10px;
      top: 0px;
      animation: activeImmersion 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
      animation-delay: 0.2s;
    }

    @keyframes activeImmersion {
      0% {
        opacity: 1;
        left: 10px;
        top: 0px;
        transform: scale(0.25);
      }
      49% {
        opacity: 0;
        left: 10px;
        top: 0px;
        transform: scale(0.75);
      }
      50% {
        opacity: 0;
        left: -25px;
        top: 5px;
        transform: scale(0.25);
      }
      51% {
        opacity: 1;
        left: -25px;
        top: 5px;
        transform: scale(0.25);
      }
      100% {
        opacity: 0;
        left: -25px;
        top: 5px;
        transform: scale(0.75);
      }
    }
  
    @media screen and (max-width: 700px) {
      .audioPlayer:not(.fullscreen) .mobileSeekbar {
        display: block;
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
      }
      .mobileSeekbarInner {
        height: max(3px, var(--safe-margin-bottom));
        background-color: var(--primary);
      }
      .audioPlayer:not(.fullscreen) {
        display: flex;
        padding-bottom: max(3px, var(--safe-margin-bottom));
        align-items: center;
        cursor: pointer;
      }
      .audioPlayer:not(.fullscreen) .trackInfo {
        width: 100%;
        flex-shrink: 1;
        overflow: hidden;
        pointer-events: none;
      }
      .audioPlayer:not(.fullscreen) img {
        /* prevent image from triggering another click event, closing the popup as soon as it opens */
        pointer-events: none;
      }
      .audioPlayer:not(.fullscreen) .actions {
        display: none;
      }
      .audioPlayer:not(.fullscreen) .centerBar {
        width: unset;
        margin-right: 10px;
      }
      :global(.audioPlayer:not(.fullscreen) .progress) {
        display: none;
      }
      .audioPlayer:not(.fullscreen) .playbackActions button:not(.playBtn) {
        display: none;
      }
      .audioPlayer .playBtn {
        padding: 10px;
      }
      .audioPlayer .mainData h3 {
        width: 100%;
        margin: 5px;
      }
    }
  
    @media screen and (max-width: 1000px) {
      .audioPlayer.fullscreen {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        flex-direction: column;
        justify-content: center;
      }
      .audioPlayer.fullscreen .actions {
        bottom: 140px;
      }
      .audioPlayer.fullscreen .centerBar {
        bottom: 20px;
      }
      :global(.audioPlayer.fullscreen .centerBar button:not(.playBtn) svg) {
        width: 36px;
        height: 36px;
      }
      :global(.audioPlayer.fullscreen .immersiveMode svg) {
        width: 32px;
        height: 32px;
      }
      .audioPlayer.fullscreen:after {
        text-align: center;
        width: 100%;
      }
      .audioPlayer.fullscreen .albumImage img, .audioPlayer.fullscreen .albumImage {
        margin: 0;
        width: min(500px, 80vw);
        height: unset;
      }
      .audioPlayer.fullscreen .trackInfo {
        flex-direction: column;
        align-items: center;
      }
      .audioPlayer.fullscreen .title h3 {
        font-size: 1.5em;
        line-height: 1.2em;
        text-align: center;
      }
      :global(.audioPlayer.fullscreen .fromTime, .audioPlayer.fullscreen .toTime) {
        position: absolute;
        top: 10px;
        font-size: 0.6em;
      }
      :global(.audioPlayer.fullscreen .toTime) {
        right: 0;
      }
    }
  </style>