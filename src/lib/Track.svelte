<script lang="ts">
  import PlaylistPlay from "svelte-material-icons/PlaylistPlay.svelte";
  import PlaylistPlus from "svelte-material-icons/PlaylistPlus.svelte";
  import PlaylistCheck from "svelte-material-icons/PlaylistCheck.svelte";
  import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
  import { type TrackData, toTrackData } from "../assets/Audio";
  import { audioStore, audioStorePosition, openAlbum } from "../AudioStore";

  export let track: TrackData;
  export let showAlbum = false;
  export let showOpenAlbumBtn = false;
  export let showAddToQueueBtn = true;
  export let onClick = null;
  export let number = -1;

  function playTrack(track: TrackData, e) {
    e.stopPropagation();
    if (track.album && !showAlbum) {
      audioStore.set(track.album.tracks.map(t => toTrackData(track.album, t)));
      audioStorePosition.set(track.album.tracks.map(t => t.title).indexOf(track.title) || 0);
    } else {
      audioStorePosition.set(0);
      audioStore.update((value) => [track, ...value]);
    }
  }
  
  function addToQueue(track: TrackData, e) {
    e.stopPropagation();
    if (!$audioStore.map(track => track.mp3).includes(track.mp3)) {
      audioStore.update((value) => [...value, track]);
    }
  }

  function removeFromQueue(track: TrackData, e) {
    e.stopPropagation();
    if ($audioStore.map(track => track.mp3).includes(track.mp3)) {
      let index = $audioStore.map(track => track.mp3).indexOf(track.mp3);
      audioStore.update((value) => {
        if (index < $audioStorePosition) {
          audioStorePosition.set($audioStorePosition - 1);
        }
        return value.filter((t) => t.mp3 != track.mp3)
      });
    }
  }

  function toggleQueue(track: TrackData, e) {
    e.stopPropagation();
    if ($audioStore.map(track => track.mp3).includes(track.mp3)) {
      removeFromQueue(track, e);
    } else {
      addToQueue(track, e);
    }
  }

  function triggerOpenAlbum(track: TrackData, e) {
    e.stopPropagation();
    openAlbum.set(track.album);
  }
</script>

<div
  class="track"
  on:click={(e) => (onClick || playTrack).call(null, track, e)}
  on:keydown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      (onClick || playTrack).call(null, track, e);
    }
  }}
  tabindex="0"
  role="button"
>
  {#if number != -1}
  <span class="number">{number}</span>
  {/if}
  {#if showAlbum}
  <img src={track.album.poster} alt={track.title} />
  {/if}
  {#if showAlbum}
  <span class="albumName">{track.album.name}</span>
  {/if}
  <span class="title" title={track.title}>
    {track.title}
  </span>
  {#each track.tags as tag}
    <span class={"tag " + tag}>{tag}</span>
  {/each}
  {#if showAddToQueueBtn}
  <button
    on:click={(e) => toggleQueue.call(null, track, e)}
    on:keydown={(e) => {
      if (e.key === " " || e.key === "Enter") {
        e.stopPropagation();
        e.preventDefault();
        toggleQueue.call(null, track, e)
      }
    }}
    title="Add/Remove from queue"
    tabindex="0">
    {#if $audioStore.map(track => track.mp3).includes(track.mp3)}
    <PlaylistCheck />
    {/if}
    {#if !$audioStore.map(track => track.mp3).includes(track.mp3)}
    <PlaylistPlus />
    {/if}
  </button>
  {/if}
  {#if showOpenAlbumBtn}
  <button
    on:click={(e) => triggerOpenAlbum.call(null, track, e)}
    on:keydown={(e) => {
      if (e.key === " " || e.key === "Enter") {
        e.stopPropagation();
        e.preventDefault();
        triggerOpenAlbum.call(null, track, e);
      }
    }}
    title="Show album"
    tabindex="0">
    <OpenInNew />
  </button>
  {/if}
</div>

<style>
  .track {
    height: 1em;
    padding: 10px;
    text-align: left;
    user-select: none;
    cursor: pointer;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .track:focus-visible, .track button:focus-visible {
    outline: 2px solid #777;
  }
  .track .number {
    min-width: 3ch;
    text-align: center;
    margin-right: 10px;
  }
  .track img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .track .title {
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tag {
    background-color: #ccc;
    color: black;
    line-height: 20px;
    border-radius: 100px;
    padding: 5px 10px;
  }
  .track button {
    border: none;
    cursor: pointer;
    font-size: 24px;
    line-height: 0;
    height: 36px;
  }
  .track button:not(:hover) {
    background-color: transparent;
  }
  .track:hover {
    background-color: #aaa;
  }
  .track .albumName {
    font-weight: bold;
    margin-right: 10px;
    white-space: nowrap;
  }
  @media screen and (max-width: 900px) {
    .track .albumName {
      display: none;
    }
  }
</style>