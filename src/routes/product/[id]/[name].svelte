<script>
    import Star from "$components/star/Star.svelte";
    export let product;
    const product_description = "<p>" + product.prod_description.replace( "\n", "</p>\n<p>") + "</p>";
</script>

<div id="product-page">
    <header id="product-breadcrumb">
        <a href="/">All Products</a>
        <span>></span>
        <a href="/">{ product.prod_category }</a>
        <span>></span>
        { #if product.prod_brand }
            <a href="/">{ product.prod_brand }</a>
            <span>></span>
        { /if }
        <a href="/product/{ product.prod_id }/{ product.prod_name }">{ product.prod_name }</a>
    </header>
    
    <section id="product">
        <!-- Name -->
        <header>
            <p>{ product.prod_name }</p>
        </header>
        <!-- Images & Price -->
        <div id="product-details">
            <section id="product-image">
                <div id="image-placeholder">
                    { #if product.prod_image }
                        <img src="data:image/jpg;base64,{ product.prod_image }" alt="Product">
                    { :else }
                        <img src="/steamy-logo.png" alt="Steamy Logo">
                    { /if }
                </div>
            </section>
            <section id="product-price">
                <!-- Rating -->
                <div id="product-rating">
                    { #each Array( 5 ) as _, index }
                        { #if product.prod_rating / index >= 1 }
                            <Star rating={ 1 } />
                        { :else }
                            <Star rating={ 0 } />
                        { /if }
                    { /each }
                    <p>({ product.prod_rating })</p>
                </div>
                <!-- Seller -->
                <p id="product-seller">Sold by <b>{ product.seller_name }</b></p>
                <hr>
                <!-- Sales -->
                <p id="product-sales"><u>{ product.prod_sales }</u> items sold</p>
                <!-- Shipping -->
                <div id="product-shipping">
                    <header>
                        <p>Shipping</p>
                    </header>
                    <section id="shipping-details">
                        <p>Ships from <span>{ product.shipping_origin }</span></p>
                        <p>Shipping fee <span>P{ product.shipping_fee }</span></p>
                    </section>
                </div>
                <!-- Quantity & Add to Cart -->
                <div id="qty-cart">
                    <section id="qty">
                        <!-- Add/Remove Quantities -->
                        <div id="add-remove">
                            <input type="number" min="1" max="99" value="1">
                            <div id="buttons">
                                <button>
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="15" height="15"><path stroke-linecap="round" fill="none" stroke-linejoin="round" stroke-width="40" d="M256 112v288M400 256H112"/></svg>
                                    </figure>
                                </button>
                                <button>
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="15" height="15"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M400 256H112"/></svg>
                                    </figure>
                                </button>
                            </div>
                        </div>
                        <!-- Stocks Left -->
                        <p id="stocks-left"><b>{ product.prod_stocks }</b> left</p>
                    </section>
                    <section id="add-cart">
                        <p>P{ product.prod_price }</p>
                        <button>ADD</button>
                    </section>
                </div>
            </section>
        </div>
        <!-- Specifications -->
        <div id="product-specifications">
            <header>
                <p>PRODUCT SPECIFICATIONS</p>
            </header>
            <section id="specifications">
                <!-- Left Column -->
                <div id="left-column">
                    <p>Category</p>
                    <p>Country of origin</p>
                    <p>Stocks</p>
                    <p>Ships from</p>
                </div>
                <!-- Right Column -->
                <div id="right-column">
                    <div id="category">
                        <a href="/">All Products</a>
                        <span>></span>
                        <a href="/">{ product.prod_category }</a>
                        <span>></span>
                        { #if product.prod_brand }
                            <a href="/">{ product.prod_brand }</a>
                            <span>></span>
                        { /if }
                        <a href="/">{ product.prod_name }</a>
                    </div>
                    <p>{ product.country_origin }</p>
                    <p>{ product.prod_stocks }</p>
                    <p>{ product.shipping_origin }</p>
                </div>
            </section>
        </div>
        <!-- Description -->
        <div id="product-description">
            <header>
                <p>PRODUCT DESCRIPTION</p>
            </header>
            <section id="description">
                { @html product_description }
            </section>
        </div>
    </section>
</div>

<style>
    #product-page,
    #product {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
    }

    #product-breadcrumb {
        color: #8F98A0;
    }

    #product-breadcrumb > a {
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem; /* 20px */
    }
    #product-breadcrumb > a:hover {
        color: white;
    }

    #product-breadcrumb > span {
        opacity: .5;
    }

    #product > header p {
        font-size: 1.5rem; /* 24px */
        line-height: 2rem; /* 32px */
    }

    #product-details {
        display: flex;
        column-gap: 13px;
    }

    #product-image {
        background-color: #1A678A;
        width: 100%;
        height: 380px;
        padding: 10px;
    }

    #image-placeholder {
        display: flex;
        align-items: flex-start;
        background-color: white;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    #image-placeholder > img {
        margin: auto;
        height: 80%;
    }

    #product-price {
        display: flex;
        flex-direction: column;
        background-color: #1A678A;
        width: 300px;
        height: 380px;
        padding: 10px 10px 30px 10px;
    }

    #product-rating {
        display: flex;
        column-gap: 1px;
    }

    #product-rating > p {
        color: #D5D7D8;
        margin: 0 auto;
    }

    #product-seller {
        margin-top: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    #product-details hr {
        border-top: 1px solid #203153;
        margin: 1rem 0;
    }

    #product-sales {
        text-align: right;
    }

    #product-sales u {
        text-underline-offset: 4px;
    }

    #product-shipping {
        margin: 1rem 0;
        width: 100%;
    }

    #product-shipping > header p {
        color: #D9D9D9;
    }

    #shipping-details {
        text-align: right;
        margin: 5px 0;
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem; /* 20px */
    }

    #shipping-details > p span {
        color: #ACDBF5;
    }

    #qty-cart {
        position: relative;
        margin-top: auto;
    }

    #qty {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #add-remove {
        display: flex;
        column-gap: 4px;
    }

    #add-remove input[type="number"] {
        outline: none;
        border: 1px solid #D9D9D9;
        appearance: textfield;
        color: black;
        padding: 0 5px;
        width: 50px;
        height: 35px;
    }

    #buttons {
        display: flex;
        flex-direction: column;
        row-gap: 1px;
    }

    #buttons > button {
        background-color: white;
        border: 1px solid #D9D9D9;
        margin: 0 auto;
    }

    #buttons > button figure svg {
        stroke: #666666;
    }

    #stocks-left {
        text-align: right;
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem; /* 20px */
    }

    #add-cart {
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
        position: absolute;
        padding: 5px 5px;
        width: 100%;
        border-radius: 2px;
    }

    #add-cart > p {
        color: #ACDBF5;
    }

    #add-cart > button {
        background-color: #669C1E;
        padding: 5px 1rem;
        border-radius: 2px;
        text-shadow: 0px 2px 4px rgba( 0, 0, 0, 0.5 );
    }

    #add-cart > button:hover {
        background-color: #8bd228;
    }

    #product-specifications,
    #product-description {
        margin: 10px 0;
        width: 666px;
    }

    #product-specifications > header,
    #product-description > header {
        background-color: #1A678A;
        padding: 10px 1rem;
    }

    #product-specifications > header p,
    #product-description > header p {
        font-size: 1.25rem; /* 20px */
        line-height: 1.75rem; /* 28px */
    }

    #specifications {
        display: flex;
        margin-top: 10px;
    }

    #specifications > div {
        display: flex;
        flex-direction: column;
        row-gap: 5px;
    }

    #left-column {
        margin-right: 2rem;
    }

    #right-column {
        flex-grow: 1;
    }

    #category > a {
        color: #ACDBF5;
    }

    #category > a:hover {
        color: white;
    }

    #category > span {
        color: #8F98A0;
    }

    #description {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        margin-top: 10px;
    }

    #description > p {
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem; /* 20px */
    }
</style>