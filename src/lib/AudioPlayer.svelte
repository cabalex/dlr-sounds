<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import Play from "svelte-material-icons/Play.svelte";
  import Pause from "svelte-material-icons/Pause.svelte";
  import SkipNext from "svelte-material-icons/SkipNext.svelte";
  import SkipPrevious from "svelte-material-icons/SkipPrevious.svelte";
  import PlaylistMusic from "svelte-material-icons/PlaylistMusic.svelte";
  import PlaylistMusicOutlined from "svelte-material-icons/PlaylistMusicOutline.svelte";

  import clockFace from "../assets/smallWorldClockface.png";
  import type { TrackData } from "../assets/Audio";
  import { audioStore, audioStorePosition, audioElem } from "../AudioStore";
  import Queue from './Queue.svelte';
  let progress = 0;
  let duration = 0.01;
  let track: TrackData = $audioStore[0];

  let audio = $audioElem;
  let audioPlayer;
  let paused = true;
  let fullscreen = false;

  // Audio listeners
  function onEnded() {
    // Play automatically the next track when audio ends.
    if ($audioStorePosition < $audioStore.length - 1) {
      audioStorePosition.set($audioStorePosition + 1);
    }
  }
  function onPlay() {
    navigator.mediaSession.playbackState = "playing";
  }
  function onPause() {
    navigator.mediaSession.playbackState = "paused";
  }
  function onTimeUpdate() {
    progress = audio.currentTime;
    duration = audio.duration || 0.01;
  }

  // activate scroller
  function updateScroller() {
    if (window.innerWidth - 250 < scroller.clientWidth) {
      scroller.style.animation = "";
    } else {
      scroller.style.animation = "none";
    }
  }
  let scroller: HTMLElement;

  onMount(() => {
    audio = $audioElem;
    // Append child to document to allow media controls
    // (MediaSession requires an element to work?)
    audioPlayer.appendChild(audio);

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
  });

  // play the audio.
  async function play() {
    if (!decodeURIComponent(audio.src).includes(track.mp3)) {
      audio.src = track.mp3;
    }

    updateMetadata();
    await audio.play();
    paused = false;
    progress = audio.currentTime;
    duration = audio.duration || 100;
    updateMetadata();
    updateScroller();
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
      album: track.album,
      artwork: [{src: track.poster, sizes: "500x500", type: "image/jpeg"}]
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

  function readableTime(time: number) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - (hours * 3600)) / 60);
    let seconds = Math.floor(time - (hours * 3600) - (minutes * 60));
    return `${hours > 0 ? `${hours}:` : ''}${(minutes < 10 ? "0" : "") + minutes}:${(seconds < 10 ? "0" : "") + seconds}`
  }

  /* Seeking on the playback bar */
  function handleMouseCursor(e) {
    let bounding = e.target.getBoundingClientRect();
    let width = bounding.width;
    let x = width + bounding.x - (e.clientX || e.touches[0].x);
    audio.currentTime = (width - x) / width * audio.duration;
    updatePositionState();
    e.stopPropagation();
  }

  /* queue */
  let showingQueue = false;
</script>

<div class="audioPlayer" class:fullscreen={fullscreen} on:click={(e) => e.stopPropagation()} bind:this={audioPlayer}>
  {#if (audio.readyState >= 3)}
  <img alt={track.title} src={track.poster} on:click={() => { fullscreen = !fullscreen; updateScroller()}} />
  {:else}
  <img class="loadingClock" alt="Loading" src={clockFace} />
  {/if}
  <div class="trackData">
    <div class="mainData">
      <h3 title={track.title}>
        <span class="scroller" bind:this={scroller}>
          {track.title}
          <span>{track.album}</span>
        </span>
      </h3>
      <button on:click={() => { if (audio.currentTime > 3) { audio.currentTime = 0 } else { previousTrack() }}}><SkipPrevious /></button>
      <button on:click={() => { if (audio.paused) { play() } else { pause() }} }>
        {#if (paused)}
        <Play />
        {:else}
        <Pause />
        {/if}
      </button>
      <button on:click={nextTrack}><SkipNext /></button>
      <button on:click={() => showingQueue = !showingQueue}>
        {#if (showingQueue)}
        <PlaylistMusic />
        {/if}
        {#if (!showingQueue)}
        <PlaylistMusicOutlined />
        {/if}
      </button>
    </div>
    <div class="progress">
      <span class="fromTime">{readableTime(progress)}</span>
      <div class="progressBarFrame" on:click={handleMouseCursor}>
        <div class="progressBar" style={`width: ${progress / duration * 100}%`}></div>
      </div>
      <span class="toTime">{readableTime(duration)}</span>
    </div>
  </div>
  <Queue shown={showingQueue} onShown={(newState) => showingQueue = newState} />
</div>

<style>
  .audioPlayer {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    z-index: 10;
    background-color: var(--alternate);
    transition: height 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    padding-bottom: var(--safe-margin-bottom);

    height: 75px;
  }
  .audioPlayer img {
    width: 75px;
    height: 75px;
  }
  .audioPlayer button {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: 0;
    font-size: 32px;
    cursor: pointer;
  }
  .trackData {
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: calc(100% - 90px);
    padding-right: 10px;
  }
  .mainData {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .mainData h3 {
    margin: 0;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: left;
    /* prevent wrapping */
    white-space: nowrap;
    overflow: hidden;
  }
  .mainData .scroller {
    display: inline-block;
    animation: scroll 13s linear infinite;
    animation-delay: -5s;
  }
  .mainData .scroller span {
    font-size: 0.8em;
    color: #888;
  }
  @keyframes scroll {
    0% { transform: translateX(100%); }
    40% { transform: translateX(0%); }
    60% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
  .progress {
    display: flex;
    flex-direction: row;
    align-items: center;
    bottom: 5px;
    width: 100%;
    gap: 10px;
  }
  .progressBarFrame {
    height: 10px;
    flex-grow: 1;
    bottom: 10px;
    left: 100px;
    background-color: #222;
    overflow: hidden;
    border-radius: 5px;
  }
  .progressBar {
    height: 100%;
    background-color: white;
    pointer-events: none;
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
  .audioPlayer.fullscreen img {
    width: min(500px, calc(90vw / 3));
    height: unset;
    margin-right: 5%;
  }
  .audioPlayer.fullscreen .trackData {
    width: min(600px, 95vw);
    padding: 0;
  }
  .audioPlayer.fullscreen .mainData {
    flex-wrap: wrap;
    justify-content: left;
  }
  .audioPlayer.fullscreen .mainData h3 {
    width: 100vw;
    font-size: 2em;
    line-height: 1.2em;
    overflow: visible;
    white-space: initial;
  }
  .audioPlayer.fullscreen .mainData button {
    font-size: 3em;
  }
  .audioPlayer.fullscreen .scroller {
    animation: none;
    max-width: 100%;
    display: block;
  }
  .audioPlayer.fullscreen .scroller span {
    display: block;
  }

  .audioPlayer.fullscreen .progress {
    position: fixed;
    bottom: 5%;
    left: 5%;
    width: 90%;
    font-size: 1.4em;
    filter: drop-shadow(0 0 5px var(--alternate));
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
    .audioPlayer.fullscreen:after {
      text-align: center;
      width: 100%;
    }
    .audioPlayer.fullscreen .mainData {
      justify-content: center;
    }
    .audioPlayer.fullscreen img {
      margin-right: 0;
      width: min(500px, 90vw);
    }
    .audioPlayer.fullscreen .mainData h3 {
      font-size: 1.5em;
      line-height: 1.2em;
      text-align: center;
    }
    .audioPlayer.fullscreen .progress {
      position: unset;
      width: unset;
      font-size: unset;
    }
  }
</style>