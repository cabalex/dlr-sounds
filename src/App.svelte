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
      All audio files are sourced from
      <a rel="noreferrer" target="_blank" href="http://soundsofdisneyland.com/">Sounds of Disneyland</a>, with artwork by <a rel="noreferrer" target="_blank" href="https://www.tshergdesign.com/">Tony Sherg</a>-- go check them out!
    </p>
    <p style="font-size: 12px; line-height: 1.25;">
      Fair Use Notice: This web site contains copyrighted material whose use has not been authorized by the Walt Disney Company. This site is non-profit, and is intended for educational use, constituting a fair use of the copyrighted material (as provided for in section 107 of the US Copyright Law.) If you wish to use this copyrighted material for purposes that go beyond fair use, you must first obtain permission from the Walt Disney Company. All Disney related artwork and audio posted on this site is owned by the Walt Disney Company. This site is in no way affiliated or endorsed by the Walt Disney Company. For official Disney information please visit: <a rel="noreferrer" target="_blank" href="https://disneyland.disney.go.com">https://www.disneyland.disney.go.com</a>. Please support the Walt Disney Company by purchasing their merchandise and visiting their theme parks around the world.
    </p>
    dlr-sounds v4 - <a rel="noreferrer" target="_blank" href="https://cabalex.github.io">cabalex 2022</a>
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