<script>
  import "../app.css";
  import Nav_Fieldless from "$components/nav_fieldless/Nav_Fieldless.svelte";
  import Footer from "$components/footer/Footer.svelte";
</script>

<Nav_Fieldless />
<main class="flex flex-col flex-1 gap-y-16 mx-auto max-w-[904px] mt-[30px] mb-[80px] h-full w-full">
  <slot/>
</main>
<Footer />
