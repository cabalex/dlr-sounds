<script lang="ts">

  export let audio: HTMLAudioElement;
  export let updatePositionState: () => void;
  export let progress: number;
  export let duration: number;
  export let chapters: {startTime: number, title: string}[]|null = null;

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
    
    if (chapters) {
      for (let chapter of chapters) {
        if (Math.abs(scrubbing.tempCurrentTime - chapter.startTime) < 30) {
          scrubbing.tempCurrentTime = chapter.startTime;
        }
      }
    }
    
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
        <div class="progressBarHead" class:active={scrubbing}>
          {#if scrubbing && chapters !== null}
            {#each chapters as chapter}
              {#if Math.abs(scrubbing.tempCurrentTime - chapter.startTime) < 30}
                <span class="chapterTooltip">{chapter.name}</span>
              {/if}
            {/each}
          {/if}
        </div>
    </div>
    {#if chapters !== null}
      {#each chapters as chapter}
        <div class="chapterMarker" style={`left: ${chapter.startTime / duration * 100}%`} title={chapter.title} />
      {/each}
    {/if}
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
    background-color: #222;
    border-radius: 5px;
    user-select: none;
    position: relative;
  }
  .progressBar {
    height: 100%;
    max-width: 100%;
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
    z-index: 2;
    transform: scale(0);
    background-color: white;
    transition: transform 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }
  .chapterTooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: white;
    padding: 5px;
    border-radius: 5px;
    font-size: 0.8em;
    white-space: nowrap;
  }
  .progressBarFrame:hover .progressBarHead, .progressBarHead.active {
    background-color: #ccc;
    transform: scale(1);
  }
  .chapterMarker {
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    left: 0;
    background-color: #666;
    z-index: 1;
  }
  .fromTime, .toTime {
    user-select: none;
    cursor: pointer;
    width: 6ch;
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