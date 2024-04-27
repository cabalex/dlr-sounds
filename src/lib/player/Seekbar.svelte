<script lang="ts">

  export let audio: HTMLAudioElement;
  export let updatePositionState: () => void;
  export let progress: number;
  export let duration: number;

  let barElem;

  function readableTime(time: number) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - (hours * 3600)) / 60);
    let seconds = Math.floor(time - (hours * 3600) - (minutes * 60));
    return `${hours > 0 ? `${hours}:` : ''}${(minutes < 10 ? "0" : "") + minutes}:${(seconds < 10 ? "0" : "") + seconds}`
  }

  /* Seeking on the playback bar */
  let scrubbing: false|{startX: number, startTime: number, tempCurrentTime: number} = false;
  function handleMouseCursor(e) {
    if ((e.type === "mouseup" || e.type === "mouseout" || e.type === "touchend") && scrubbing) {
      audio.currentTime = scrubbing.tempCurrentTime;
      setTimeout(() => scrubbing = false, 10); // prevent jumping of head back to original pos for a frame
      return;
    }
    
    let x = e.clientX || e.touches[0].clientX;
    if (e.type === "mousedown" || e.type === "touchstart") {
      scrubbing = {startX: x, startTime: audio.currentTime, tempCurrentTime: audio.currentTime};
    }
    if (!scrubbing) {
      return;
    }
    let bounding = barElem.getBoundingClientRect();
    let secondsPerPixel = duration / bounding.width;
    scrubbing.tempCurrentTime = Math.max(0, Math.min(duration, (x - bounding.left) * secondsPerPixel));
    updatePositionState();
    e.stopPropagation();
  }
</script>

<div class="progress">
  <span class="fromTime" on:click={() => audio.currentTime = 0}>{readableTime(scrubbing ? scrubbing.tempCurrentTime : progress)}</span>
  <div
    class="progressBarFrame"
    on:mousedown={handleMouseCursor}
    on:touchstart={handleMouseCursor}
    on:mouseup={handleMouseCursor}
    on:touchend={handleMouseCursor}
    on:touchcancel={handleMouseCursor}
    on:blur={() => {}}
    on:mousemove={handleMouseCursor}
    on:touchmove={handleMouseCursor}
    bind:this={barElem}
  >
    <div class="progressBar" style={`width: ${(scrubbing ? scrubbing.tempCurrentTime : progress) / duration * 100}%`}>
      <div class="progressBarHead" class:active={scrubbing} />
    </div>
  </div>
  <span class="toTime">{readableTime(duration)}</span>
</div>

<svelte:body on:mousemove={handleMouseCursor} on:touchmove={handleMouseCursor} on:mouseup={handleMouseCursor} on:touchend={handleMouseCursor} on:touchcancel={handleMouseCursor} />

<style>
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
    border-radius: 5px;
    user-select: none;
  }
  .progressBar {
    height: 100%;
    background-color: white;
    border-radius: 10px;
    pointer-events: none;
    position: relative;
  }
  .progressBarHead {
    position: absolute;
    height: 20px;
    right: -10px;
    top: -5px;
    width: 20px;
    border-radius: 50%;
    transform: scale(0);
    background-color: white;
    transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }
  .progressBarFrame:hover .progressBarHead, .progressBarHead.active {
    background-color: #ccc;
    transform: scale(1);
  }
  .fromTime, .toTime {
    user-select: none;
    cursor: pointer;
    width: 4ch;
  }
  :global(.audioPlayer.fullscreen .progress) {
    position: fixed;
    bottom: 100px;
    left: 5%;
    width: 90%;
    font-size: 1.4em;
    filter: drop-shadow(0 0 5px var(--alternate));
  }
</style>