<script lang="ts">
  import Plus from "svelte-material-icons/Plus.svelte";
  import PlaylistThumb from "../assets/playlist.png";
  import type { TrackData } from "../assets/Audio";
  import { audioStore } from "../AudioStore";
  import Album from './Album.svelte';

  export let albums: any[];

  let playlists: {name: string, poster: string, tracks: TrackData[]}[] = JSON.parse(localStorage.getItem('dlr-sounds-playlists') || '[]');

  function addPlaylist() {
    let data = prompt("Enter a name for this playlist. It'll be created from your current queue.", "New Playlist");
    if (data) {
      playlists = [...playlists, { name: data, poster: PlaylistThumb, tracks: $audioStore }];
      localStorage.setItem('dlr-sounds-playlists', JSON.stringify(playlists));
    }
  }

  function deletePlaylist(playlist) {
    playlists = playlists.filter(p => p.name != playlist.name);
    localStorage.setItem('dlr-sounds-playlists', JSON.stringify(playlists));
  }
</script>

<div class="albumViewer">
  {#each albums as album}
    <Album album={album} />
  {/each}
  {#each playlists as playlist}
    <Album album={playlist} deletePlaylist={deletePlaylist.bind(null, playlist)} />
  {/each}
  <div class="addPlaylist" on:click={addPlaylist}>
    <Plus />
  </div>
</div>

<style>
  .albumViewer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    margin: auto;
  }
  .addPlaylist {
    width: 200px;
    height: 200px;
    cursor: pointer;
    background-color: var(--alternate);
    
    display: flex;
    font-size: 150px;
    align-items: center;
    justify-content: center;
  }
</style>