<script lang="ts">
  import Check from "svelte-material-icons/Check.svelte";
  import Plus from "svelte-material-icons/Plus.svelte";
  import { albums, type Album } from '../assets/Audio';
  import { openAlbum, playlists } from "../AudioStore";

  let tag = null;
  const defaultTags = [["DL", "Disneyland"], ["DCA", "California Adventure"], ["DLR", "Resort"], ["PLAYLIST", "Playlists"]];

  function toggleTag(thisTag: string) {
    if (tag === thisTag) {
      tag = null;
    } else {
      tag = thisTag;
    }
  }

  function addPlaylist() {
    playlists.update(p => {
      p.push({
        name: `${p.length + 1} New Playlist`,
        poster: "",
        tags: ["PLAYLIST"],
        location: [0, 0],
        tracks: []
      })
      openAlbum.set(p[p.length - 1]);
      return p;
    })
  }
</script>

<div class="tags">
  {#each defaultTags as defaultTag}
  <button class:active={tag === defaultTag[0]} on:click={() => toggleTag(defaultTag[0])}>
    {#if tag === defaultTag[0]}
      <Check />
    {/if}
    {defaultTag[1]}
  </button>
  {/each}
</div>
<div class="albumList">
  {#each (tag ? [...albums, ...$playlists].filter(a => a.tags.every(t => t === tag)) : [...albums, ...$playlists]) as album}
    {#if album.tags.includes("PLAYLIST")}
    <div class="playlistImg" on:click={() => openAlbum.set(album)}>
      {album.name[0] || "?"}
    </div>
    {:else}
    <img src={album.poster} alt={album.name} on:click={() => openAlbum.set(album)} />
    {/if}
  {/each}
  {#if !tag || tag === "PLAYLIST"}
  <div class="addPlaylist" on:click={addPlaylist}>
    <Plus size="150px" />
  </div>
  {/if}
</div>

<style>
  .tags {
    width: calc(100% - 1em);
    background-color: var(--bg);
    position: sticky;
    margin: 0;
    padding: 0.5em;
    top: 3.5em;

    display: flex;
    justify-content: left;
    gap: 10px;
  }
  .tags button {
    border: 2px solid grey;
    background-color: transparent;
    border-radius: 5px;
    padding: 5px;
    font-size: unset;

    display: flex;
    align-items: center;
    gap: 5px;
    font-family: unset;
    cursor: pointer;
  }
  .tags button.active {
    background-color: grey;
  }
  @media (prefers-color-scheme: light) {
    .tags button {
      border-color: lightgrey;
    }
    .tags button.active {
      background-color: lightgrey;
    }
  }
  .tags:before {
    content: "";
    position: absolute;
    top: -2.5em;
    left: 0;
    height: 2.5em;
    width: 100%;
    background-color: var(--bg);
  }
  .albumList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    margin: auto;
  }
  .albumList > * {
    width: 200px;
    cursor: pointer;
    height: 200px;
    object-fit: cover;
  }
  .addPlaylist {
    background-color: var(--alternate);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>