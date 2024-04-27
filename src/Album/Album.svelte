<script lang="ts">
  import { fade } from "svelte/transition";
  import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte";
  import Play from "svelte-material-icons/Play.svelte";
  import Pause from "svelte-material-icons/Pause.svelte";
  import PlaylistPlus from "svelte-material-icons/PlaylistPlus.svelte";
  import Shuffle from "svelte-material-icons/Shuffle.svelte";
  import Close from "svelte-material-icons/Close.svelte";
  import { type Album, toTrackData } from "../assets/Audio";
  import Track from "../lib/Track.svelte";
  import { audioStore, audioStorePosition, audioElem } from "../AudioStore";
  import './Album.css';
  
  export let album: Album;
  export let close: () => void;

  let smallHeader = false;

  function playAll() {
    audioStorePosition.set(0);
    audioStore.set(album.tracks.map(t => toTrackData(album, t)));
  }

  function shufflePlayAll() {
    audioStorePosition.set(0);
    audioStore.set(album.tracks.map(t => toTrackData(album, t)).sort(() => Math.random() - 0.5));
  }

  function handleScroll(e) {
    smallHeader = e.target.scrollTop > 150;
  }

  function queueAll() {
    audioStore.update((value) => [...value, ...album.tracks.map(t => toTrackData(album, t))]);
  }

  $: playing = !$audioElem.paused;

  $: tracksNoTitles = album.tracks.filter(x => typeof x !== "string");
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
        <img width="200px" src={album.poster} alt={album.name} />
        <div class="info">
          <h2>{album.name}</h2>
          <div class="btnrow">
            {#if $audioStorePosition > -1 && album.tracks.map(x => x.mp3).includes($audioStore[$audioStorePosition]?.mp3)}
              {#if !playing}
                <button class="playBtn" on:click={() => {$audioElem.play(); playing = !$audioElem.paused}}>
                  <Play size="36px" />
                </button>
              {:else}
                <button class="playBtn" on:click={() => {$audioElem.pause(); playing = !$audioElem.paused}}>
                  <Pause size="36px" />
                </button>
              {/if}
            {:else}
              <button class="playBtn" on:click={playAll}>
                <Play size="36px" />
              </button>
            {/if}
            <button on:click={queueAll}>
              <PlaylistPlus size="24px" />
            </button>
            <button on:click={shufflePlayAll}>
              <Shuffle size="24px" />
            </button>
          </div>
        </div>
      </header>
    </div>
    <main style="margin-top: 10px">
      {#each album.tracks as track}
        {#if typeof track === "string"}
          <h4>{track}</h4>
        {:else}
          <Track number={tracksNoTitles.indexOf(track) + 1} track={toTrackData(album, track)} />
        {/if}
      {/each}
    </main>
  </div>
</div>