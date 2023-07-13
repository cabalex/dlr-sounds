<script lang="ts">
  import { fade } from "svelte/transition";
  import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte";
  import Play from "svelte-material-icons/Play.svelte";
  import PlaylistPlus from "svelte-material-icons/PlaylistPlus.svelte";
  import Shuffle from "svelte-material-icons/Shuffle.svelte";
  import Delete from "svelte-material-icons/Delete.svelte";
  import Close from "svelte-material-icons/Close.svelte";
  import { type Album, toTrackData } from "../assets/Audio";
  import Track from "../lib/Track.svelte";
  import { audioStore, audioStorePosition, openAlbum, playlists } from "../AudioStore";
  import PlaylistAdder from "./PlaylistAdder.svelte";
  import '../Album/Album.css';
  
  export let album: Album;
  export let close: () => void;

  let smallHeader = false;

  // DO NOT CONVERT THESE TO TRACKDATA!!! THEY ARE ALREADY TRACKDATA FROM THEIR ORIGINAL ALBUMS
  function playAll() {
    audioStorePosition.set(0);
    audioStore.set(album.tracks);
  }

  function shufflePlayAll() {
    audioStorePosition.set(0);
    audioStore.set(album.tracks.sort(() => Math.random() - 0.5));
  }

  function handleScroll(e) {
    smallHeader = e.target.scrollTop > 150;
  }

  function queueAll() {
    audioStore.update((value) => [...value, ...album.tracks]);
  }

  function addTrack(track: any) {
    openAlbum.update((album) => {
      album.tracks.push(track);
      return album;
    })
    playlists.update(p => p);
  }

  function deletePlaylist() {
    if (confirm("Are you sure you want to delete this playlist? It can't be undone.")) {
      playlists.update(p => p.filter(pl => pl.name !== album.name));
      close();
    }
  }

  function refreshPlaylists() {
    playlists.update(p => p);
  }
</script>

<div class="albumOuter" on:click={close} on:scroll={handleScroll} in:fade={{duration: 100}}>
  <div class="albumInner" on:click={(e) => e.stopPropagation()}>
    <div class="headerOuter" class:smallHeader={smallHeader}>
      <header>
        <button class="closeBtn" on:click={close}>
          <span class="close">
            <Close size="30px" />
          </span>
          <span class="backArrow">
            <ArrowLeft size="30px" />
          </span>
        </button>
        <div class="playlistImg">
          {album.name[0] || "?"}
        </div>
        <div class="info">
          <h2 contenteditable on:keydown={(e) => e.stopPropagation()} on:input={refreshPlaylists} bind:textContent={album.name} />
          <div class="btnrow">
            <button class="playBtn" on:click={playAll}>
              <Play size="36px" />
            </button>
            <button on:click={queueAll}>
              <PlaylistPlus size="24px" />
            </button>
            <button on:click={shufflePlayAll}>
              <Shuffle size="24px" />
            </button>
            <button style="color: #ED4245" on:click={deletePlaylist}>
              <Delete size="24px" />
            </button>
          </div>
        </div>
      </header>
    </div>
    <main style="margin-top: 10px">
      {#each album.tracks as track, i}
        <Track showAlbum={true} number={i + 1} track={track} />
      {/each}
    </main>
    <PlaylistAdder onTrackAdd={addTrack} filterTracks={album.tracks.map(t => toTrackData(album, t))} />
  </div>
</div>

<style>
  :global(.playlistImg) {
    user-select: none;
    background-color: #0d30a3;
    color: white;
    min-width: 200px;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5em;
    font-weight: bold;
  }
  .playBtn {
    background-color: #4bd075;
    border: none;
    border-radius: 100px;
    padding: 10px;
    line-height: 0;
    cursor: pointer;
  }
  .playBtn:hover {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 1);
  }
  .btnrow {
    align-items: center;
    gap: 10px;
  }
  .btnrow button:not(.playBtn) {
    background-color: transparent;
    border: none;
    line-height: 0;
    cursor: pointer;
  }
  .smallHeader .playBtn {
    margin-right: 50px;
  }
  .smallHeader .btnrow button:not(.playBtn) {
    display: none;
  }
  header .playlistImg {
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
  header h2 {
    font-size: 2em;
    line-height: 1em;
    text-align: left;
    width: 100%;
    overflow-wrap: break-word;
    margin: 0;
  }
  header h2:focus-visible {
    outline: none;
    border-bottom: 1px solid grey;
  }
  .headerOuter {
    height: 200px;
    width: 100%;
  }
  .smallHeader header .playlistImg {
    min-width: 100px;
    min-height: 100px;
    font-size: 3em;
  }
  .smallHeader header h2 {
    font-size: 1.5em;
  }
  @media screen and (max-width: 500px) {
    header {
      flex-direction: column;
      height: auto;
      align-items: center;
    }
    .headerOuter:not(.smallHeader) h2 {
      text-align: center;
    }
    .smallHeader header {
      padding: 0 10px;
    }
    .smallHeader header .playlistImg {
      margin-left: 50px;
    }
    .headerOuter {
      height: 300px;
    }
    .closeBtn {
      left: -10px;
      width: 75px;
      right: unset !important;
    }
    .closeBtn .close {
      display: none !important;
    }
    .backArrow {
      display: block !important;
    }
  }
</style>