<script>
    import { page } from "$app/stores";
    import Product_Loading from "$components/product_loading/Product_Loading.svelte";
    import Product_Medium from "$components/product_medium/Product_Medium.svelte";
    import SortSelection from "$components/sortselection/SortSelection.svelte"
    import RangeSlider from "svelte-range-slider-pips";
    
    let sort_by = "Release date";
    let price_under = [2600];
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
                    <input type="text" placeholder="enter search item">
                    <button>
                        <p>Search</p>
                    </button>
                </section>
                <!-- Sort by -->
                <section id="sort-by">
                    <p>Sort by</p>
                    <SortSelection { sort_by }>
                        <button>Release date</button>
                        <button>Name</button>
                        <button>Highest price</button>
                        <button>Lowest price</button>
                    </SortSelection>
                </section>
            </header>
            <!-- Product Results -->
            <ul id="product-results">
                <li>
                    <Product_Loading />
                </li>
                <li>
                    <Product_Loading />
                </li>
                <li>
                    <Product_Loading />
                </li>
            </ul>
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
                            on:stop={ ( e ) => console.log( e.detail.value ) } />
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