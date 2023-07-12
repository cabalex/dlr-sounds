<script lang="ts">
  import Close from "svelte-material-icons/Close.svelte";
  import Magnify from "svelte-material-icons/Magnify.svelte";
  import tracks, { type TrackData } from "../assets/Audio";
  import Track from "../lib/Track.svelte";

  let inputRef: HTMLInputElement;
  let results = tracks.slice(0, 50);


  function onChange(e) {
    e.stopPropagation();
    if (e.target.value.length >= 3) {
      let search = e.target.value.toLowerCase();
      results = tracks.filter((track) => {
        return `${track.album.name} - ${track.title} ${track.tags.join(", ")}`.toLowerCase().includes(search) &&
          !trackNames.includes(`${track.album.name} - ${track.title}`);
      });
    } else {
      results = defaults;
    }
  }

  export let filterTracks: TrackData[] = [];
  export let onTrackAdd: (track: TrackData) => void;

  $: trackNames = filterTracks.map((track) => `${track.album.name} - ${track.title}`);
  $: defaults = tracks.slice(0, 200).filter((track) => !trackNames.includes(`${track.album.name} - ${track.title}`));
</script>

<h2>Add new tracks</h2>
<div class="playlistAdder">
  <div class="search">
    <div class="searchBar">
      <input on:keydown={(e) => e.stopPropagation()} on:keyup={onChange} bind:this={inputRef} type="text" placeholder="Search for a track" />
      {#if (inputRef && inputRef.value)}
      <div style="cursor: pointer; line-height: 0" on:click={() => {inputRef.value = ""; results = defaults}}>
        <Close />
      </div>
      {:else}
        <Magnify />
      {/if}
    </div>
    <div class="results">
      {#each results as track}
        <Track track={track} showAlbum={true} showAddToQueueBtn={false} showOpenAlbumBtn={false} onClick={() => onTrackAdd(track)} />
      {/each}
      <div style="height: 40px">Showing {results.length} results</div>
    </div>
  </div>
  
</div>

<style>
  .playlistAdder {
    height: 200px;
  }
  .search {
    width: calc(100% - 20px);
    margin: 10px;
    position: sticky;
    top: 5px;
    z-index: 2;
    filter: drop-shadow(0 0 10px #111);
  }
  .searchBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--alternate);
    font-size: 24px;
    padding-right: 10px;
    border-radius: 20px 20px 0 0;
  }
  .search input {
    border: none;
    outline: none;
    width: calc(100% - 20px);
    background-color: transparent;
    margin-left: 5px;
    padding: 10px;
    font-size: 20px;
  }
  .search .results {
    height: 150px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    overflow-y: auto;
    background-color: var(--alternate);
    border-radius: 0 0 20px 20px;
  }
</style>