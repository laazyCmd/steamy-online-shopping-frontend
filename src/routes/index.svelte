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
    <div class="sections-content">
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
    <!-- Categories -->
    <div class="sections-content">
        <a class="categories-button" href="/">
            LATEST
        </a>
        <a class="categories-button" href="/">
            DISCOUNTED
        </a>
        <a class="categories-button" href="/">
            FREE SHIPPING
        </a>
        <a class="categories-button" href="/">
            FREEBIES
        </a>
    </div>
</section>

<style>
    #index-sections {
        width: 100%;
        margin-bottom: 1rem;
    }

    #index-sections header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .sections-content {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        column-gap: 1rem;
    }

    .categories-button {
        background-color: #10ABFF;
        border-radius: 2px;
        width: 100%;
        text-align: center;
        padding: 12px 1rem;
        font-size: 1.125rem; /* 18px */
        line-height: 1.75rem; /* 28px */
        font-weight: 600;
    }

    .categories-button:hover {
        background-color: #06bfff;
    }
</style>