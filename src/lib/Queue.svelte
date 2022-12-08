<script lang="ts">
  import PlaylistRemove from "svelte-material-icons/PlaylistRemove.svelte";
  import { audioStore, audioStorePosition } from "../AudioStore";
  import PlayAnim from "../assets/PlayAnim.svelte";
  import Track from "./Track.svelte";
  export let shown = false;
  export let onShown = (shown: boolean) => {};
  let element;

  function deleteTrack(i) {
    audioStore.update((value) => {
      value.splice(i, 1);
      if (i < $audioStorePosition) audioStorePosition.set($audioStorePosition - 1);
      return value;
    });
  }

  function onWindowClick(e) {
    if (element && element.contains(e.target) == false) {
      shown = false;
      onShown(false);
    }
  }

  function clearQueue() {
    let pos = $audioStorePosition;
    audioStorePosition.set(0);
    audioStore.update((value) => value.filter((v, i) => i === pos))
  }
</script>
{#if shown}
<div class="queue" bind:this={element}>
  <h3>{$audioStore.length} songs in queue <button on:click={clearQueue}>Clear queue</button></h3>
  {#each $audioStore as track, i}
    <div
      class={"track" + ($audioStorePosition === i ? ' playing' : '')}
      on:click={() => audioStorePosition.set(i)}
    >
      {#if $audioStorePosition === i}
      <PlayAnim className="thumb" />
      {/if}
      {#if $audioStorePosition !== i}
      <img class="thumb" src={track.poster} alt={track.title} />
      {/if}
      <span style="flex-grow: 1; text-align: left">{track.title}</span>
      <button on:click={(e) => { e.stopPropagation(); deleteTrack(i)}}><PlaylistRemove /></button>
    </div>
  {/each}
</div>
{/if}

<svelte:window on:click={onWindowClick} />

<style>
  .queue {
    position: fixed;
    right: 10px;
    bottom: 90px;
    background-color: var(--alternate-dark);
    padding: 10px;
    max-height: 50vh;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
  .queue:after {
    content: "";
    background-color: var(--alternate-dark);
    clip-path: polygon(0 0, 50% 100%, 100% 0);

    position: fixed;
    bottom: 80px;
    right: 17px;
    width: 20px;
    height: 10px;
  }
  .queue .track {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    gap: 10px;
    padding-right: 10px;
    user-select: none;
  }
  .queue .track > button {
    font-size: 24px;
    line-height: 0;
    cursor: pointer;
    border-radius: 0;
    border-color: transparent;
  }
  .queue .track:hover {
    background-color: #999;
  }
  .queue .track.playing {
    background-color: #aaa;
    position: sticky;
    bottom: 0;
    top: 0;
    box-shadow: 0 0 10px var(--alternate-dark);
  }
  .queue .track button:not(:hover) {
    background-color: transparent;
    border-color: transparent;
  }
  .queue .track .thumb {
    height: 30px;
    width: 30px;
  }
</style>