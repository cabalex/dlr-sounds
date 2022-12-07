<script lang="ts">
  import Album from './Album.svelte';

  export let albums: any[];
</script>

<div class="albumViewer">
  {#each albums as album}
    <Album album={album} />
  {/each}
</div>

<style>
  .albumViewer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    margin: auto;
  }
</style>