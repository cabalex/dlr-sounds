<script lang="ts">
  export let className: string = "";
</script>


<div class={"playAnim " + className}>
  <div class="bar1" />
  <div class="bar2" />
  <div class="bar3" />
</div>

<style>
  .playAnim {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 3px;
    height: 24px;
    margin: 0 3px;
  }
  .bar1, .bar2, .bar3 {
    background-color: white;
    width: 6px;
    height: 20px;
    animation: playAnim 0.75s infinite ease-in-out;
  }
  .bar1 {
    animation-delay: 0s;
  }
  .bar2 {
    animation-delay: -1s;
  }
  .bar3 {
    animation-delay: -2s;
  }
  @keyframes playAnim {
    0% {
      height: 24px;
    }
    40% {
      height: 5px;
    }
    60% {
      height: 14px;
    }
    100% {
      height: 24px;
    }
  }
</style>