<script>
    import SectionsButton from "$components/sectionsbutton/SectionsButton.svelte";
    import Product from "$components/product/Product.svelte";
    import Product_Wide from "$components/product_wide/Product_Wide.svelte";
    import ProductCarousel from "$components/productcarousel/ProductCarousel.svelte";

    const getPopular = async () => {
        const req = await fetch( "http://localhost:8093/product/list?popular=true&pageSize=3", {
            method: 'GET'
        } );
        const res = await req.json();
        return res.content;
    }

    const getBelow400 = async () => {
        const req = await fetch( "http://localhost:8093/product/list?price=400&pageSize=6&popular=false", {
            method: 'GET'
        } );
        const res = await req.json();
        return res.content;
    }
</script>

<!-- popular & featured -->
<section class="index-sections">
    <header>
        <h1>POPULAR & FEATURED</h1>
        <SectionsButton href="/search">
            Browse for more
        </SectionsButton>
    </header>
    <!-- products -->
    <div class="sections-content">
        { #await getPopular() }
            <Product />
            <Product />
            <Product />
        { :then products }
            <Product product={ products[0] } />
            <Product product={ products[1] } />
            <Product product={ products[2] } />
        { /await }
    </div>
</section>

<!-- browse by steamy -->
<section class="index-sections">
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

<!-- Under P400 -->
<section class="index-sections">
    <header>
        <h1>UNDER P400</h1>
        <section>
            <SectionsButton href="/">
                Under P200
            </SectionsButton>
            <SectionsButton href="/">
                Browse for more
            </SectionsButton>
        </section>
    </header>
    <!-- Product Carousel -->
    <div id="product-carousel">
        { #await getBelow400() }
            <ProductCarousel>
                <div class="flex gap-x-3">
                    <Product_Wide />
                    <Product_Wide />
                </div>
                <div class="flex gap-x-3">
                    <Product_Wide />
                    <Product_Wide />
                </div>
                <div class="flex gap-x-3">
                    <Product_Wide />
                    <Product_Wide />
                </div>
            </ProductCarousel>
        { :then products }
            <ProductCarousel>
                <div class="flex gap-x-3">
                    <Product_Wide product={ products[0] } />
                    <Product_Wide product={ products[1] } />
                </div>
                <div class="flex gap-x-3">
                    <Product_Wide product={ products[2] } />
                    <Product_Wide product={ products[3] } />
                </div>
                <div class="flex gap-x-3">
                    <Product_Wide product={ products[4] } />
                    <Product_Wide product={ products[5] } />
                </div>
            </ProductCarousel>
        { /await }
    </div>
</section>

<style>
    .index-sections {
        width: 100%;
        margin-bottom: 1rem;
    }

    .index-sections header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .index-sections section {
        display: flex;
        align-items: center;
        column-gap: 8px;
    }

    #product-carousel {
        margin-top: 10px;
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