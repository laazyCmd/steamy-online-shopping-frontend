<script>
  import "../app.css";
  import Nav from "$components/nav/Nav.svelte";
  import Footer from "$components/footer/Footer.svelte";
</script>

<Nav/>
<main class="flex flex-col flex-1 gap-y-16 mx-auto max-w-[904px] mt-[30px] mb-[80px] h-full">
  <slot/>
</main>
<Footer/>
