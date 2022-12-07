<script lang="ts">
  import type { TrackData } from "../assets/Audio";
  import { audioStore, audioStorePosition } from "../AudioStore";
  import Track from "./Track.svelte";

  export let album: {name: string, poster: string, tracks: TrackData[]};
  let element;
  let open = false;

  function onWindowClick(e) {
    if (element.contains(e.target) == false) open = false;
  }

  function playAll() {
    audioStorePosition.set(0);
    audioStore.set(album.tracks);
  }

  function queueAll() {
    audioStore.update((value) => [...value, ...album.tracks]);
  }
</script>

<div class="album" on:click={() => open = !open} bind:this={element}>
  <img src={"http://soundsofdisneyland.com/" + album.poster} alt={album.name} />
  {#if open}
  <div class="trackListOuter">
    <div class="trackList">
      <header>
        <img src={"http://soundsofdisneyland.com/" + album.poster} alt={album.name} />
        <h2>{album.name} <h3>{album.tracks.length} tracks</h3>
          <div>
            <button on:click={playAll}>Play All</button>
            <button on:click={queueAll}>Queue All</button>
          </div>
        </h2>
      </header>
      {#each album.tracks as track, i}
        <Track track={track} number={i+1} />
      {/each}
    </div>
  </div>
  {/if}
</div>

<svelte:window on:click={onWindowClick} />

<style>
  .album {
    position: relative;
    line-height: 0;
  }
  .album > img {
    cursor: pointer;
  }
  .album img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  .trackListOuter {
    content: "";
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .trackList {
    width: calc(100% - 40px);
    max-width: 500px;
    margin: 10px auto;
    height: calc(100% - 120px);
    background-color: var(--alternate);
    padding: 10px;
    overflow-y: auto;
    line-height: 1em;

    display: flex;
    flex-direction: column;
  }
  .trackList header {
    display: flex;
    gap: 10px;
    position: relative;
    margin-bottom: 10px;
  }
  .trackList header h2 {
    font-size: 2.5em;
    text-align: left;
    line-height: 1em;
    margin-block-end: 0;
  }
  .trackList header h3 {
    display: block;
    margin: 0;
    font-size: 1.25rem;
  }

  @media screen and (max-width: 500px) {
    .trackList header {
      flex-direction: column;
      align-items: center;
    }
    .trackList header h2 {
      margin: 0;
    }
  }
</style>