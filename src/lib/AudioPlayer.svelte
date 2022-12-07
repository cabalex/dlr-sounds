<script lang="ts">
  import { onDestroy } from 'svelte';
  import Play from "svelte-material-icons/Play.svelte";
  import Pause from "svelte-material-icons/Pause.svelte";
  import SkipNext from "svelte-material-icons/SkipNext.svelte";
  import SkipPrevious from "svelte-material-icons/SkipPrevious.svelte";
  import PlaylistMusic from "svelte-material-icons/PlaylistMusic.svelte";
  import PlaylistMusicOutlined from "svelte-material-icons/PlaylistMusicOutline.svelte";


  import type { TrackData } from "../assets/Audio";
  import { audioStore, audioStorePosition, audioElem } from "../AudioStore";
  import Queue from './Queue.svelte';
  let progress = 0;
  let duration = 0.01;
  let track: TrackData = $audioStore[0];

  let audio = $audioElem;
  audio.addEventListener('ended', () => {
    // Play automatically the next track when audio ends.
    if ($audioStorePosition < $audioStore.length - 1) {
      audioStorePosition.set($audioStorePosition + 1);
      play();
    }
  });
  // progress bar 
  audio.addEventListener('timeupdate', () => {
    progress = audio.currentTime;
    duration = audio.duration || 0.01;
  });

  const unsubscribeAudio = audioStore.subscribe((value) => {
    if (value[$audioStorePosition].title !== track.title) {
      track = value[$audioStorePosition];
      audio.src = "http://soundsofdisneyland.com/" + track.mp3;
      play();
    }
  });
  const unsubscribePosition = audioStorePosition.subscribe((value) => {
    if ($audioStore[value].title !== track.title) {
      track = $audioStore[value];
      audio.src = "http://soundsofdisneyland.com/" + track.mp3;
      play();
    }
  });

  onDestroy(() => { unsubscribeAudio(); unsubscribePosition() });

  // play the audio.
  async function play() {
    setMediaControlHandlers();

    if (!decodeURIComponent(audio.src).includes(track.mp3)) {
      audio.src = "http://soundsofdisneyland.com/" + track.mp3;
    }
    await audio.play();
    progress = audio.currentTime;
    duration = audio.duration || 0.01;
    updateMetadata();
  }

  // update metadata for media controls.
  function updateMetadata() {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: track.album,
      artwork: [{src: "http://soundsofdisneyland.com/" + track.poster, sizes: "1400x1400", type: "image/png"}]
    });

    // Media is loaded, set the duration.
    updatePositionState();
  }

  // update the position state for media controls.
  function updatePositionState() {
    navigator.mediaSession.setPositionState({
      duration: audio.duration,
      playbackRate: audio.playbackRate,
      position: audio.currentTime
    });
  }

  function previousTrack() {
    audioStorePosition.set(($audioStorePosition - 1 + $audioStore.length) % $audioStore.length);
    play();
  }
  function nextTrack() {
    audioStorePosition.set(($audioStorePosition + 1) % $audioStore.length);
    play();
  }

  function setMediaControlHandlers() {
    // previous track.
    navigator.mediaSession.setActionHandler('previoustrack', previousTrack);
    navigator.mediaSession.setActionHandler('nexttrack', nextTrack);

    /* Play & Pause */
    navigator.mediaSession.setActionHandler('play', () => audio.play());
    navigator.mediaSession.setActionHandler('pause', () => audio.pause());

    /* Seek To (supported since Chrome 78) */

    navigator.mediaSession.setActionHandler('seekto', function(event) {
      if (event.fastSeek && ('fastSeek' in audio)) {
        audio.fastSeek(event.seekTime);
        return;
      }
      audio.currentTime = event.seekTime;
      updatePositionState();
    });
  }
  setMediaControlHandlers();

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
    e.stopPropagation();
  }

  /* queue */
  let showingQueue = false;
  

</script>

<div class="audioPlayer" on:click={(e) => e.stopPropagation()}>
  {#if (audio.readyState >= 3)}
  <img alt={track.title} src={"http://soundsofdisneyland.com/" + track.poster} />
  {/if}
  {#if (audio.readyState < 3)}
  <img class="loadingClock" alt="Loading" src="http://soundsofdisneyland.com/icons/smallWorldClockface.png" />
  {/if}
  <div class="trackData">
    <div class="mainData">
      <h3>{track.title}</h3>
      <button on:click={previousTrack}><SkipPrevious /></button>
      <button on:click={() => { if (audio.paused) { play() } else { audio.pause() }} }>
        {#if (audio.paused)}
        <Play />
        {/if}
        {#if (!audio.paused)}
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
    width: 100%;
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
    text-align: left;
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
    transition: width 0.3s linear;
    background-color: white;
    pointer-events: none;
  }
</style>