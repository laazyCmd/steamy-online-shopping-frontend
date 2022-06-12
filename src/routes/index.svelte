<script>
    import BrowseMore from "$components/browsemore/BrowseMore.svelte";
    import Product from "$components/product/Product.svelte";
</script>

<!-- popular & featured -->
<section id="index-sections">
    <header>
        <h1>POPULAR & FEATURED</h1>
        <BrowseMore href="/search"/>
    </header>
    <!-- products -->
    <div id="products-popular">
        <Product/>
        <Product/>
        <Product/>
    </div>
</section>

<!-- browse by steamy -->
<section id="index-sections">
    <header>
        <h1>BROWSE BY STEAMY</h1>
    </header>
    <!-- products -->
    <div id="products-popular">
        <Product/>
        <Product/>
        <Product/>
    </div>
</section>

<style>
    #index-sections {
        width: 100%;
        margin-bottom: 3rem;
    }

    #index-sections header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #products-popular {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        column-gap: 1rem;
    }
</style>