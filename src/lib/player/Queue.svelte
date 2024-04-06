<script lang="ts">
  import PlaylistRemove from "svelte-material-icons/PlaylistRemove.svelte";
  import Delete from "svelte-material-icons/Delete.svelte";
  import { audioStore, audioStorePosition, repeat } from "../../AudioStore";
  import PlayAnim from "../../assets/PlayAnim.svelte";
  import Track from "../Track.svelte";
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

  /* drag and drop */
  let mouseYCoordinate = null; // pointer y coordinate within client
  let distanceTopGrabbedVsPointer = null;

  let draggingItem = null;
  let draggingItemId = null;
  let draggingItemIndex = null;

  let hoveredItemIndex = null;

  $: {
      // prevents the ghost flickering at the top
      if (mouseYCoordinate == null || mouseYCoordinate == 0) {
          // showGhost = false;
      }
  }

  $: {
      if (
          draggingItemIndex != null &&
          hoveredItemIndex != null &&
          draggingItemIndex != hoveredItemIndex
      ) {
          // swap items
          audioStore.update((value) => {
            [value[draggingItemIndex], value[hoveredItemIndex]] = [
              value[hoveredItemIndex],
              value[draggingItemIndex],
            ];
            return value;
          })

          // balance
          draggingItemIndex = hoveredItemIndex;
      }
  }
</script>
{#if shown}
<div class="queue" bind:this={element} on:touchstart={(e) => e.stopPropagation()}>
  <h3>
    <span>{$audioStore.length} {$audioStore.length == 1 ? "song" : "songs"} in queue</span>
    <button title="Clear queue" on:click={clearQueue}><Delete /></button>
  </h3>
  {#if mouseYCoordinate}
  <div
      class="track ghost"
      class:playing={$audioStorePosition === draggingItemIndex}
      style="top: {mouseYCoordinate + distanceTopGrabbedVsPointer}px; width: {element.getBoundingClientRect().width - 45}px"
      draggable="true"
    >
      {#if $audioStorePosition === draggingItemIndex}
      <PlayAnim className="thumb" />
      {/if}
      {#if $audioStorePosition !== draggingItemIndex}
      <img class="thumb" src={draggingItem.poster} alt={draggingItem.title} />
      {/if}
      <span>{draggingItem.title}</span>
      <button>
        <PlaylistRemove />
      </button>
  </div>
  {/if}
  {#each $audioStore as track, i}
    <div
      class="track"
      class:playing={$audioStorePosition === i}
      class:invisible={draggingItemId == track.mp3}
      draggable="true"
      on:dragstart={(e) => {
        if ($audioStorePosition === i) return;
        if (draggingItemId) {
          // dragstart without dragdrop - mobile
          // We want to drop the item here!
          hoveredItemIndex = i;
          audioStore.update((value) => {
            [value[draggingItemIndex], value[hoveredItemIndex]] = [
              value[hoveredItemIndex],
              value[draggingItemIndex],
            ];
            return value;
          })
          draggingItemId = null; // makes item visible
          hoveredItemIndex = null; // prevents instant swap
          mouseYCoordinate = null;
          return;
        }
        e.dataTransfer.setData("text/plain", `${track.title} - ${track.album.name} at ${location.href}`);
        e.dataTransfer.dropEffect = "move";
        mouseYCoordinate = e.clientY;
        //console.log('dragstart', mouseYCoordinate);

        draggingItem = track;
        draggingItemIndex = i;
        draggingItemId = track.mp3;

        // @ts-ignore
        distanceTopGrabbedVsPointer = e.target.getBoundingClientRect().y - e.clientY;
      }}
      on:drag={(e) => {
        mouseYCoordinate = e.clientY;
        //console.log('drag', mouseYCoordinate);
      }}
      on:dragover={(e) => {
        // we don't want this because the element can be sticky
        if ($audioStorePosition !== i) hoveredItemIndex = i;
      }}
      on:dragend={(e) => {
        //console.log('dragend', mouseYCoordinate);
        //console.log('\n');

        // mouseYCoordinate = e.clientY;

        draggingItemId = null; // makes item visible
        hoveredItemIndex = null; // prevents instant swap
      }}
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
      <span>{track.title}</span>
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
    bottom: 70px;
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
    border-radius: 10px;
  }
  .invisible {
    cursor: grabbing;
    opacity: 0;
  }
  .ghost {
    margin-bottom: 10px;
    pointer-events: none;
    z-index: 100;
    position: fixed;
    top: 0;
    background-color: var(--alternate-dark);
    filter: drop-shadow(0 0 10px #777);
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
    cursor: grab;
    gap: 10px;
    padding-right: 10px;
    padding-left: 5px;
    user-select: none;
    border-radius: 5px;
  }
  .queue .track > span {
    flex-grow: 1;
    text-align: left;
  }
  .queue .track > button, .queue button {
    font-size: 24px;
    line-height: 0;
    cursor: pointer;
    border-radius: 5px;
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
    border-radius: 5px;
    pointer-events: none;
  }
</style>