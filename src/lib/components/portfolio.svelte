<script>
  import PortfolioItem from "$lib/components/portfolioItem.svelte";
  export let portfolioGifs;

  function scrollRight() {
    const portfolio = document.querySelector(".portfolio");
    portfolio.scrollBy({ left: 500, behavior: "smooth" });
  }

  function scrollLeft() {
    const portfolio = document.querySelector(".portfolio");
    portfolio.scrollBy({ left: -500, behavior: "smooth" });
  }
</script>

<button class="left" on:click={scrollLeft}>Scroll</button>
<div class="portfolio">
  {#each portfolioGifs as gif}
    <PortfolioItem {gif} />
  {/each}
</div>
<!-- <button class="right" on:click={scrollRight}>Scroll</button> -->
<button class="right" on:click={scrollRight}>Scroll</button>

<style>
  .portfolio {
    /* background-color: blue; */

    display: flex;
    flex-direction: row;
    align-items: center;

    overflow-x: scroll;
    scrollbar-width: none;
  }

  .left {
    position: absolute;
    left: 4rem;
  }

  .right {
    position: absolute;
    right: 4rem;
  }
</style>
