<script lang="ts">
    let shown = localStorage.getItem("immersionPopupShown") === "true";

    let bottom = "70px";
    let right = "55px";

    function closePopup() {
        shown = true;
        localStorage.setItem("immersionPopupShown", "true");
    }
</script>

{#if !shown}
<div class="popup" style="bottom: {bottom}; right: {right}">
    Want more immersion? Simulate the soundscape of the parks by clicking here!
</div>
{/if}

<svelte:body on:click={closePopup} />

<style>
    .popup {
        position: fixed;
        font-size: 14px;
        right: 0;
        z-index: 100;
        background-color: #111;
        color: white;
        padding: 10px;
        border-radius: 5px;
        max-width: 200px;
    }
    .popup:after {
        content: "";
        position: absolute;
        top: 100%;
        right: 10px;
        border: 10px solid transparent;
        border-top-color: #111;
    }
    @media screen and (max-width: 700px) {
        .popup {
            display: none;
        }
    }
</style>