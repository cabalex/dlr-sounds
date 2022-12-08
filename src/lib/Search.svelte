<script lang="ts">
  import Magnify from "svelte-material-icons/Magnify.svelte"
  import Track from "./Track.svelte";
  export let tracks;

  let results = [];

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
  <div class="searchBar">
    <input on:keyup={onChange} type="text" placeholder={`Search ${tracks.length} magical tracks...`} />
    <Magnify />
  </div>
  <div class="results">
    {#each results as track}
      <Track track={track} showAlbum={true} />
    {/each}
  </div>
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
    background-color: field;
    font-size: 24px;
    padding-right: 10px;
  }
  .search input {
    border: none;
    outline: none;
    width: calc(100% - 20px);
    padding: 10px;
    font-size: 20px;
  }
  .search .results {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: calc(100vh - 220px);
    overflow-y: auto;
    background-color: var(--alternate);
  }
</style>