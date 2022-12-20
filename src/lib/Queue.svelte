<script lang="ts">
  import PlaylistRemove from "svelte-material-icons/PlaylistRemove.svelte";
  import Delete from "svelte-material-icons/Delete.svelte";
  import Shuffle from "svelte-material-icons/Shuffle.svelte";
  import { audioStore, audioStorePosition } from "../AudioStore";
  import PlayAnim from "../assets/PlayAnim.svelte";
  import Track from "./Track.svelte";
  export let shown = false;
  export let onShown = (shown: boolean) => {};
  let element;

  function deleteTrack(i) {
    audioStore.update((value) => {
      if (i < $audioStorePosition) audioStorePosition.set($audioStorePosition - 1);
      return value.filter((v, j) => j !== i);
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
    audioStore.update((value) => {
      return value.filter((v, i) => i === pos);
    })
    audioStorePosition.set(0);
  }

  function shuffleQueue() {
    let pos = $audioStorePosition;
    audioStore.update((value) => {
      let shuffled = value.filter((v, i) => i !== pos).sort(() => Math.random() - 0.5);
      audioStorePosition.set(0);
      return [value[pos], ...shuffled];
    });
  }
</script>
{#if shown}
<div class="queue" bind:this={element}>
  <h3>
    <span>{$audioStore.length} {$audioStore.length == 1 ? "song" : "songs"} in queue</span>
    <button on:click={clearQueue}><Delete /></button>
    <button on:click={shuffleQueue}><Shuffle /></button>
  </h3>
  {#each $audioStore as track, i}
    <div
      class={"track" + ($audioStorePosition === i ? ' playing' : '')}
      on:click={() => audioStorePosition.set(i)}
      on:keydown={(e) => {
        if (e.key === "Enter" || e.key == " ") {
          e.preventDefault();
          e.stopPropagation(); 
          audioStorePosition.set(i);
        }
      }}
      role="button"
      tabindex="0"
    >
      {#if $audioStorePosition === i}
      <PlayAnim className="thumb" />
      {/if}
      {#if $audioStorePosition !== i}
      <img class="thumb" src={track.poster} alt={track.title} />
      {/if}
      <span style="flex-grow: 1; text-align: left">{track.title}</span>
      <button
        on:click={(e) => { e.stopPropagation(); deleteTrack(i)}}
        on:keydown={(e) => {
          if (e.key === "Enter" || e.key == " ") {
            e.preventDefault();
            e.stopPropagation(); 
            deleteTrack(i);
          }
        }}
      >
        <PlaylistRemove />
      </button>
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
    max-width: calc(100vw - 40px);
    margin-bottom: var(--safe-margin-bottom);
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
  .queue > h3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    position: sticky;
    top: -10px;
    margin: 0;
    padding: 10px;
    background-color: var(--alternate-dark);
  }
  .queue > h3 > span {
    flex-grow: 1;
    text-align: center;
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
  .queue .track > button, .queue button {
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
    top: 50px;
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