<script lang="ts">
  import Magnify from "svelte-material-icons/Magnify.svelte"
  import Close from "svelte-material-icons/Close.svelte"
  import Track from "./Track.svelte";
  export let tracks;

  let results = [];
  let inputRef;

  function onChange(e) {
    if (e.target.value.length >= 3) {
      let search = e.target.value.toLowerCase();
      results = tracks.filter((track) => {
        return `${track.album} - ${track.title}`.toLowerCase().includes(search);
      });
    } else {
      results = [];
    }
  }
</script>

<div class="search">
  <div class="searchBar" style={results.length ? "border-bottom: 1px solid #777" : ""}>
    <input bind:this={inputRef} on:keyup={onChange} type="text" placeholder={`Search ${tracks.length} magical tracks...`} />
    {#if (inputRef && inputRef.value)}
    <div style="cursor: pointer" on:click={() => {inputRef.value = ""; results = []}}>
      <Close />
    </div>
    {:else}
      <Magnify />
    {/if}
  </div>
  {#if results}
  <div class="results">
    {#each results as track}
      <Track track={track} showAlbum={true} />
    {/each}
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
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
  }
  .searchBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--alternate);
    font-size: 24px;
    padding-right: 10px;
  }
  .search input {
    border: none;
    outline: none;
    width: calc(100% - 20px);
    background-color: var(--alternate);
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
  }
</style>