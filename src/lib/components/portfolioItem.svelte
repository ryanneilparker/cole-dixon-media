<script>
  export let gif;
</script>

<div class="portfolio-item">
  <img src={gif} alt="Portfolio item" />
</div>

<style>
  .portfolio-item {
    /* background-color: violet; */

    min-width: 30%;
    margin: 2rem 10rem;
    border-radius: 2rem;

    box-shadow:
      rgba(240, 46, 170, 0.4) -5px 5px,
      rgba(240, 46, 170, 0.3) -10px 10px,
      rgba(240, 46, 170, 0.2) -15px 15px,
      rgba(240, 46, 170, 0.1) -20px 20px,
      rgba(240, 46, 170, 0.05) -25px 25px;
  }

  .portfolio-item img {
    width: 100%;
    height: 100%;

    object-fit: fill;

    border-radius: 2rem;

    display: block;
  }
</style>
