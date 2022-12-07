<script lang="ts">
  import AlbumViewer from './lib/AlbumViewer.svelte';
  import AudioPlayer from './lib/AudioPlayer.svelte';
  import tracks, { albums } from './assets/Audio';
  import Search from './lib/Search.svelte';
</script>

<main>
  <AudioPlayer />
  <h1>Sounds of the DLR</h1>
  <Search tracks={tracks} />
  <AlbumViewer albums={albums} />
  <footer>
    <p>
      This site is not affiliated with the Disneyland Resort or the Walt Disney
      Company.
    </p>
    <p>
      All audio files are sourced from
      <a href="http://soundsofdisneyland.com/">Sounds of Disneyland</a>, with artwork by <a href="https://www.tshergdesign.com/">Tony Sherg</a>-- go check them out!
    </p>
      <a href="https://cabalex.github.io">cabalex 2022</a>
  </footer>
</main>

<style>
  main {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
  }
  footer {
    margin-bottom: 100px;
  }
</style>