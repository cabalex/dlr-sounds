<script lang="ts">
  import Magnify from "svelte-material-icons/Magnify.svelte"
  import Close from "svelte-material-icons/Close.svelte"
  import Track from "./Track.svelte";
  import Fuse from "fuse.js";
  export let tracks;

  let results = [];
  let inputRef;

  const fuse = new Fuse(tracks, {
    keys: [
      "album.name",
      "title",
      "tags",
      "chapters",
    ],
    threshold: 0.3,
  });

  function onChange(e) {
    e.stopPropagation();
    if (e.target.value.length >= 3) {
      results = fuse.search(e.target.value).map(x => x.item);
    } else {
      results = [];
    }
  }
</script>

<div class="search">
  <div class="searchBar" style={results.length ? "border-bottom: 1px solid #777; border-radius: 20px 20px 0 0" : ""}>
    <input bind:this={inputRef} on:keydown={(e) => e.stopPropagation()} on:keyup={onChange} type="text" placeholder={`Search ${tracks.length} magical tracks...`} />
    {#if (inputRef && inputRef.value)}
    <div style="cursor: pointer; line-height: 0" on:click={() => {inputRef.value = ""; results = []}}>
      <Close />
    </div>
    {:else}
      <Magnify />
    {/if}
  </div>
  {#if results && results.length}
  <div class="results">
    {#each results as track}
      <Track track={track} showAlbum={true} showOpenAlbumBtn={true} />
    {/each}
    <div style="height: 40px">Showing {results.length} results</div>
  </div>
  {/if}
</div>

<style>
  .search {
    width: calc(100% - 20px);
    margin: 10px;
    position: sticky;
    top: 5px;
    z-index: 2;
    filter: drop-shadow(0 0 10px #111);
  }
  :global(.results .track:not(:hover)) {
    background-color: var(--alternate) !important;
  }
  .searchBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--alternate);
    font-size: 24px;
    padding-right: 10px;
    border-radius: 20px;
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
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: calc(100vh - 600%);
    overflow-y: auto;
    background-color: var(--alternate);
    border-radius: 0 0 20px 20px;
  }
</style>