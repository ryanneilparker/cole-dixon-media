<script>
  import Header from "$lib/components/header.svelte";
  import Calendar from "$lib/components/calendar.svelte";
  import CallToAction from "$lib/components/callToAction.svelte";
  import Portfolio from "$lib/components/portfolio.svelte";

  import { portfolioGifs } from "$lib/stores/imageStore";

  import { Alert } from "flowbite-svelte";
</script>

<section class="landing-page">
  <!-- <Header />

  <Portfolio portfolioGifs={$portfolioGifs} />

  <Calendar />

  <CallToAction />

  <div class="social-proof">
    <div class="social-proof-item"></div>
    <div class="social-proof-item"></div>
    <div class="social-proof-item"></div>
  </div> -->

  <Alert>
    <span class="font-medium">Info alert!</span> A simple info alert—check it out!
  </Alert>
</section>

<style>
  .landing-page {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .social-proof {
    background-color: green;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .social-proof-item {
    background-color: violet;

    height: 300px;
    width: 300px;
  }
</style>
