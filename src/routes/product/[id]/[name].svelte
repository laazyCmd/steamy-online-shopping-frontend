<script>
    import { cartList } from "$lib/cart";
    import Star from "$components/star/Star.svelte";
    export let product;
    const description = "<p>" + product.description.replace( "\n", "</p>\n<p>") + "</p>";

    let productQuantity = 1;
    $: {
        if ( productQuantity < 1 ) productQuantity = 1;
        if ( productQuantity > 99 ) productQuantity = 99;
    }

    const addToCart = () => {
        const newProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            stock: productQuantity
        }
        
        for ( const [ index, item ] of $cartList.entries() ) {
            if ( item.id === product.id ) {
                $cartList[ index ].stock += productQuantity;
                return;
            }
        }

        cartList.update( currentList => [ ...currentList, newProduct ] );
    }
</script>

<svelte:head>
    <title>{ product.name } on Steamy</title>
</svelte:head>

<div id="product-page">
    <header id="product-breadcrumb">
        <a href="/">All Products</a>
        <span>></span>
        <a href="/">{ product.category }</a>
        <span>></span>
        { #if product.brand }
            <a href="/">{ product.brand }</a>
            <span>></span>
        { /if }
        <a href="/product/{ product.id }/{ product.name }">{ product.name }</a>
    </header>
    
    <section id="product">
        <!-- Name -->
        <header>
            <p>{ product.name }</p>
        </header>
        <!-- Images & Price -->
        <div id="product-details">
            <section id="product-image">
                <div id="image-placeholder">
                    { #if product.image }
                        <img src="data:image/jpg;base64,{ product.image }" alt="Product">
                    { :else }
                        <img src="/steamy-logo.png" alt="Steamy Logo">
                    { /if }
                </div>
            </section>
            <section id="product-price">
                <!-- Rating -->
                <div id="product-rating">
                    { #each Array( 5 ) as _, index }
                        { #if product.rating / index >= 1 }
                            <Star rating={ 1 } />
                        { :else }
                            <Star />
                        { /if }
                    { /each }
                    <p>({ product.rating })</p>
                </div>
                <!-- Seller -->
                <p id="product-seller">Sold by <b>{ product.seller }</b></p>
                <hr>
                <!-- Sales -->
                <p id="product-sales"><u>{ product.sales }</u> items sold</p>
                <!-- Shipping -->
                <div id="product-shipping">
                    <header>
                        <p>Shipping</p>
                    </header>
                    <section id="shipping-details">
                        <p>Ships from <span>{ product.shippingOrigin }</span></p>
                        <p>Shipping fee <span>{ product.shippingFee === 0 ? "Free Shipping!" : "P" + product.shippingFee }</span></p>
                    </section>
                </div>
                <!-- Quantity & Add to Cart -->
                <div id="qty-cart">
                    <section id="qty">
                        <!-- Add/Remove Quantities -->
                        <div id="add-remove">
                            <input type="number" bind:value={ productQuantity }>
                            <div id="buttons">
                                <button on:click={ () => productQuantity++ }>
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="15" height="15"><path stroke-linecap="round" fill="none" stroke-linejoin="round" stroke-width="40" d="M256 112v288M400 256H112"/></svg>
                                    </figure>
                                </button>
                                <button on:click={ () => productQuantity-- }>
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="15" height="15"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M400 256H112"/></svg>
                                    </figure>
                                </button>
                            </div>
                        </div>
                        <!-- Stocks Left -->
                        <p id="stocks-left"><b>{ product.stocks }</b> left</p>
                    </section>
                    <section id="add-cart">
                        <p>P{ product.price }</p>
                        <button on:click={ addToCart }>ADD</button>
                    </section>
                </div>
            </section>
        </div>
        <!-- Specifications -->
        <div id="product-specifications">
            <header>
                <p>PRODUCT SPECIFICATIONS</p>
            </header>
            <table id="specifications">
                <tr>
                    <th>Category</th>
                    <td id="category">
                        <a href="/">All Products</a>
                        <span>></span>
                        <a href="/">{ product.category }</a>
                        <span>></span>
                        { #if product.brand }
                            <a href="/">{ product.brand }</a>
                            <span>></span>
                        { /if }
                        <a href="/">{ product.name }</a>
                    </td>
                </tr>
                <tr>
                    <th>Country of origin</th>
                    <td>{ product.countryOrigin }</td>
                </tr>
                <tr>
                    <th>Stocks</th>
                    <td>{ product.stocks }</td>
                </tr>
                <tr>
                    <th>Ships from</th>
                    <td>{ product.shippingOrigin }</td>
                </tr>
            </table>
        </div>
        <!-- Description -->
        <div id="product-description">
            <header>
                <p>PRODUCT DESCRIPTION</p>
            </header>
            <section id="description">
                { @html description }
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
        border-collapse: separate;
        border-spacing: 0 5px;
        margin-top: 10px;
    }

    #specifications > tr > th {
        width: 150px;
        font-weight: normal;
        text-align: left;
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