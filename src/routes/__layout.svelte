<script>
  import "../app.css";
  import Nav from "$components/nav/Nav.svelte";
  import Footer from "$components/footer/Footer.svelte";
</script>

<Nav/>
<main class="gap-y-16 mx-[451px] mt-[30px] h-full">
  <slot/>
</main>
<Footer/>
