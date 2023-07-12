<script lang="ts">
  import AlbumList from './AlbumList/AlbumList.svelte';
  import AudioPlayer from './lib/AudioPlayer.svelte';
  import tracks from './assets/Audio';
  import Search from './lib/Search.svelte';
  import { openAlbum } from './AudioStore';
  import Album from './Album/Album.svelte';
  import Playlist from './Playlist/Playlist.svelte';

  $: {
    if ($openAlbum) {
      document.body.classList.add('noScroll');
    } else {
      document.body.classList.remove('noScroll');
    }
  }
</script>
<header>
  <span>Sounds of the DLR</span>
</header>
{#if $openAlbum}
  {#if $openAlbum.tags.includes("PLAYLIST")}
    <Playlist album={$openAlbum} close={() => openAlbum.set(null)} />
    {:else}
    <Album album={$openAlbum} close={() => openAlbum.set(null)} />
  {/if}
{/if}
<main>
  <AudioPlayer />
  <Search tracks={tracks} />
  <AlbumList />
  <footer>
    <p>
      A rewrite of
      <a rel="noreferrer" target="_blank" href="http://soundsofdisneyland.com/">Sounds of Disneyland</a>, with artwork by <a rel="noreferrer" target="_blank" href="https://www.tshergdesign.com/">Tony Sherg</a>-- go check them out!
    </p>
    <p style="font-size: 12px; line-height: 1.25;">
      Fair Use Notice: This web site contains copyrighted material whose use has not been authorized by the Walt Disney Company. This site is non-profit, and is intended for educational use, constituting a fair use of the copyrighted material (as provided for in section 107 of the US Copyright Law.) If you wish to use this copyrighted material for purposes that go beyond fair use, you must first obtain permission from the Walt Disney Company. All Disney related artwork and audio posted on this site is owned by the Walt Disney Company. This site is in no way affiliated or endorsed by the Walt Disney Company. For official Disney information please visit: <a rel="noreferrer" target="_blank" href="https://disneyland.disney.go.com">https://www.disneyland.disney.go.com</a>. Please support the Walt Disney Company by purchasing their merchandise and visiting their theme parks around the world.
    </p>
    dlr-sounds v7 - <a rel="noreferrer" target="_blank" href="https://cabalex.github.io">cabalex 2023</a>
  </footer>
</main>

<style>
  header {
    background: linear-gradient(89.97deg, #a6aed1 0.65%, #bcb7c0 17.24%, #b5b5b5 29.13%, #dcdbdb 56.88%, #dfdad7 67.15%, #e0d0d5 74.33%, #ccc4d7 84.03%, #abacd7 92.67%, #abbad7 99.97%);
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 55px;
    font-weight: bold;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
  header span {
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 1));
  }
  main {
    margin-top: 50px;
    height: calc(100% - 50px);
    width: calc(100vw - 20px);

    display: flex;
    flex-direction: column;
  }
  footer {
    margin-bottom: 100px;
  }
  :global(.noScroll) {
    overflow: hidden;
  }
  @media screen and (max-width: 650px) {
    main {
      width: 100%;
    }
  }
</style>