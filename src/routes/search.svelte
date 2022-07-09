<script>
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import Product_Loading from "$components/product_loading/Product_Loading.svelte";
    import Product_Medium from "$components/product_medium/Product_Medium.svelte";
    import SortSelection from "$components/sortselection/SortSelection.svelte"
    import RangeSlider from "svelte-range-slider-pips";
    
    let searchTag = $page.url.searchParams.get( "name" )?.trim() ?? "";
    let price_under = [2600];
    if ( $page.url.searchParams.get( "price" ) ) price_under[0] = parseInt( $page.url.searchParams.get( "price" ) );
    let sortBy = $page.url.searchParams.get( "sort" );

    let products = {};
    let totalPages = 0;
    let currentPage = 0;

    const switchPage = ( pageIndex ) => {
        currentPage = pageIndex;
        getProductList( sortBy );
    }

    const getProductList = async ( sort ) => {
        if ( price_under[0] !== 2600 ) $page.url.searchParams.set( "price", `${ price_under }` );
        if ( searchTag.trim() !== "" ) $page.url.searchParams.set( "name", searchTag.trim() );
        $page.url.searchParams.set( "page", currentPage.toString() );
        
        sortBy = sort ?? "dateCreated";
        $page.url.searchParams.set( "sort", sortBy );

        console.log( "http://localhost:8093/product/list?" + $page.url.searchParams.toString() );

        goto( "?" + $page.url.searchParams.toString() );

        const req = await fetch( "http://localhost:8093/product/list?" + $page.url.searchParams.toString() );
        const res = await req.json();

        products = res.content;
        totalPages = res.totalPages;
    };
    
    onMount( () => getProductList() );
</script>

<!-- All Products -->
<section id="all-products">
    <header>
        <h1>ALL PRODUCTS</h1>
    </header>
    <div id="results-narrow">
        <!-- Product Search -->
        <div id="product-search">
            <header>
                <!-- Search -->
                <section id="search">
                    <input type="text" bind:value={ searchTag } placeholder="enter search item">
                    <button on:click={ () => getProductList( sortBy ) }>
                        <p>Search</p>
                    </button>
                </section>
                <!-- Sort by -->
                <section id="sort-by">
                    <p>Sort by</p>
                    <SortSelection { sortBy } { getProductList }>
                        <button data-sort="dateCreated">Release date</button>
                        <button data-sort="name">Name</button>
                        <button data-sort="price,desc">Highest price</button>
                        <button data-sort="price,asc">Lowest price</button>
                    </SortSelection>
                </section>
            </header>
            <!-- Product Results -->
            <ul id="product-results">
                { #if Object.keys( products ).length }
                    { #each products as product (product.id) }
                        <li>
                            <Product_Medium { product } />
                        </li>
                    { /each }
                { :else }
                    <li>
                        <Product_Loading />
                    </li>
                    <li>
                        <Product_Loading />
                    </li>
                    <li>
                        <Product_Loading />
                    </li>
                { /if }
            </ul>
            <!-- page buttons -->
            { #if Object.keys( products ).length }
                <section id="page-buttons">
                    <button class="page-nav"
                    class:nav-disabled={ currentPage === 0 }
                    on:click={ () => switchPage( --currentPage ) }
                    disabled={ currentPage === 0 }>
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="20" height="31"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/></svg>
                        </figure>
                    </button>
                    <div id="pages">
                        { #each Array( 5 ) as _, index }
                            { #if currentPage >= 4 }
                                <button on:click={ () => switchPage( index + currentPage ) }
                                class:page-selected={ index + currentPage === currentPage }
                                class:hide-page-button={ index + currentPage >= totalPages }>
                                    { ( index + currentPage ) + 1 }
                                </button>
                            { :else }
                                <button on:click={ () => switchPage( index ) }
                                class:page-selected={ index === currentPage }
                                class:hide-page-button={ index >= totalPages }>
                                    { index + 1 }
                                </button>
                            { /if }
                        { /each }
                    </div>
                    <button class="page-nav"
                    class:nav-disabled={ currentPage === totalPages - 1 }
                    on:click={ () => switchPage( ++currentPage ) }
                    disabled={ currentPage === totalPages - 1 }>
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="20" height="31"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144"/></svg>
                        </figure>
                    </button>
                </section>
            { /if }
        </div>
        <div id="narrow-products">
            <!-- Narrow by Price -->
            <div id="narrow-section">
                <header>
                    <h1>Narrow by Price</h1>
                </header>
                <section id="narrow-price-slider">
                    <!-- Slider -->
                    <div>
                        <RangeSlider 
                            bind:values={ price_under } 
                            min={ 0 } 
                            max={ 2600 } 
                            step={ 200 } 
                            springValues={{ stiffness: 1, damping: 1 }}
                            on:stop={ ( e ) => getProductList( sortBy ) } />
                    </div>
                    { #if price_under[0] === 2600 }
                        <p>Any Price</p>
                    { :else if price_under[0] === 0 }
                        <p>Free</p>
                    { :else }
                        <p>Under P{ price_under[0].toLocaleString( "en-US" ) }</p>
                    { /if }
                </section>
            </div>
            <!-- Narrow by Category -->
            <div id="narrow-section">
                <header>
                    <h1>Narrow by Category</h1>
                </header>
                <!-- Categories -->
                <ul id="narrow-categories">
                    <li>
                        <a href="/">Components</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Home & Tools</a>
                    </li>
                    <li>
                        <a href="/">Software</a>
                    </li>
                    <li>
                        <a href="/">Toys & Drones</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<style>
    #all-products {
        width: 100%;
        margin-bottom: 1rem;
    }

    #all-products header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #all-products header > h1 {
        font-size: 1.5rem; /* 24px */
        line-height: 2rem; /* 32px */
    }
    
    #results-narrow {
        display: flex;
        margin-top: 14px;
        column-gap: 1rem;
    }

    #product-search {
        flex-grow: 1;
    }

    #product-search header {
        display: flex;
        align-items: center;
        background-color: #101822;
        height: 45px;
        padding: 10px;
    }

    #sort-by,
    #search {
        display: flex;
        align-items: center;
        column-gap: 10px;
    }

    #search input[type="text"] {
        color: black;
        outline: none;
        width: 207px;
        border-radius: 2px;
        padding: 2px 7px;
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem; /* 20px */
    }

    #search button {
        color: #67C1F5;
        background-color: #213A4C;
        border-radius: 2px;
        padding: 1px 7px;
    }

    #search button:hover {
        color: white;
        background-color: #5199c2;
    }

    #sort-by {
        position: relative;
    }

    #sort-by > p {
        color: #4C6C8C;
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem; /* 20px */
    }

    #product-results {
        display: flex;
        flex-wrap: wrap;
        margin-top: 8px;
        row-gap: 10px;
        justify-content: space-between;
    }

    #product-results > li {
        border-radius: 2px;
        overflow: hidden;
        width: 220px;
        height: 330px;
    }

    #page-buttons {
        display: flex;
        justify-content: center;
        margin: 24px 0;
        column-gap: 13px;
        justify-items: center;
    }

    #pages {
        display: flex;
        column-gap: 8px;
    }

    #pages > button {
        padding: 1px 5px;
    }

    #pages > button:hover {
        color: #66c0f4;
        text-decoration: underline;
    }

    .page-nav {
        background-color: #4b586e;
        padding: 0 5px;
        cursor: pointer;
        border-radius: 2px;
    }

    .page-nav:hover {
        background-color: #767f8a;
    }

    .nav-disabled {
        opacity: 50%;
    }

    .nav-disabled {
        background-color: #4b586e !important;
    }

    .page-selected {
        color: #66c0f4;
        text-decoration: none !important;
    }

    .hide-page-button {
        display: none;
    }

    #narrow-products {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    
    #narrow-section > header {
        background-color: #323E4C;
        width: 200px;
        height: 28px;
        padding: 0 8px;
    }

    #narrow-section > header h1 {
        font-size: 1rem; /* 16px */
        line-height: 1.5rem; /* 24px */
    }
    
    #narrow-price-slider {
        text-align: center;
        border: 2px solid #323E4C;
        padding: 10px 8px;
    }

    #narrow-price-slider > p {
        color: #9FBBCB;
        margin: 5px 0;
    }

    :global( .rangeSlider > .rangeHandle ) {
        width: 18px;
        height: 19px;
    }

    :global( 
        .rangeSlider > .rangeHandle > .rangeNub,
        .rangeSlider > .rageHandle.active > .rangeNub 
    ) {
        width: 16px;
        height: 16px;
        background-color: white !important;
        cursor: pointer;
        box-shadow: 0px 0px 5px 2px rgba( 0, 0, 0, 0.5 );
    } 

    :global( .rangeSlider > .rangeHandle::before ) {
        box-shadow: none !important;
    }

    :global( .rangeSlider ) {
        background-color: #67C1F5 !important;
        height: 5px;
    }

    #narrow-categories {
        display: flex;
        flex-direction: column;
        row-gap: 6px;
        text-align: left;
        border: 2px solid #323E4C;
        padding: 10px 8px;
    }

    #narrow-categories > li a {
        color: #66C0F4;
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem; /* 20px */
    }

    #narrow-categories > li a:hover {
        color: white;
    }
</style>