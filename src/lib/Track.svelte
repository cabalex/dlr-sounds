<script lang="ts">
  import type { TrackData } from "../assets/Audio";
  import { audioStore, audioStorePosition } from "../AudioStore";

  export let track: TrackData;
  export let showAlbum = false;
  export let number = -1;

  function playTrack(track: TrackData, e) {
    e.stopPropagation();
    audioStorePosition.set(0);
    audioStore.update((value) => [track, ...value])
  }
</script>

<div class="track" on:click={(e) => playTrack.call(null, track, e)}>
  {#if showAlbum}
  <img src={"http://soundsofdisneyland.com/" + track.poster} alt={track.title} />
  {/if}
  {#if number != -1}
  <span>{number}</span>
  {/if}
  {track.title}
</div>

<style>
  .track {
    height: 1em;
    padding: 10px;
    text-align: left;
    user-select: none;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .track span {
    width: 20px;
  }
  .track img {
    width: 30px;
    height: 30px;
  }
  .track:hover {
    background-color: #aaa;
  }
</style>