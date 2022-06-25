<script>
    import Star from "$components/star/Star.svelte";
</script>

<div id="product-page">
    <header id="product-breadcrumb">
        <a href="/">All Products</a>
        <span>></span>
        <a href="/">%category%</a>
        <span>></span>
        <a href="/">%brand%</a>
        <span>></span>
        <a href="/">%prod_name%</a>
    </header>
    
    <section id="product">
        <!-- Name -->
        <header>
            <p>%prod_name%</p>
        </header>
        <!-- Images & Price -->
        <div id="product-details">
            <section id="product-image">
                <div id="image-placeholder">
                    <img src="/steamy-logo.png" alt="">
                </div>
            </section>
            <section id="product-price">
                <!-- Rating -->
                <div id="product-rating">
                    { #each Array( 3 ) as _ }
                        <Star rating={ 1 } />
                    { /each }
                    <Star rating={ 0 } />
                    <Star rating={ 0 } />
                    <p>(ඞ)</p>
                </div>
                <!-- Seller -->
                <p id="product-seller">Sold by <b>%seller_name%</b></p>
                <hr>
                <!-- Sales -->
                <p id="product-sales"><u>%prod_sales%</u> items sold</p>
                <!-- Shipping -->
                <div id="product-shipping">
                    <header>
                        <p>Shipping</p>
                    </header>
                    <section id="shipping-details">
                        <p>Ships from <span>%shipping_origin%</span></p>
                        <p>Shipping fee <span>P%shipping_fee%</span></p>
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
                        <p id="stocks-left"><b>%prod_stocks%</b> left</p>
                    </section>
                    <section id="add-cart">
                        <p>P%prod_price</p>
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
                        <a href="/">%category%</a>
                        <span>></span>
                        <a href="/">%brand%</a>
                        <span>></span>
                        <a href="/">%prod_name%</a>
                    </div>
                    <p>%country_origin%</p>
                    <p>%prod_stocks%</p>
                    <p>%shipping_origin%</p>
                </div>
            </section>
        </div>
        <!-- Description -->
        <div id="product-description">
            <header>
                <p>PRODUCT DESCRIPTION</p>
            </header>
            <section id="description">
                <p>On January 1st, 1994, chapter 345 of JoJo's Bizarre Adventure manga was released in Weekly Shonen Jump №1. In the chapter, character Yoshikage Kira enters a lengthy monologue about his personal life, describing his daily routine, habits and interests (manga panels shown below).</p>
                <p>On August 19th, 2016, episode 21 "Yoshikage Kira Just Wants to Live Quietly, Part 1" of part four Diamond is Unbreakable of JoJo's Bizarre Adventure anime series premiered. In the episode, the monologue is featured (shown below, left (Japanese) and right (English dub)).</p>
                <p>My name is Yoshikage Kira. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.</p>
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
        width: 100%;
        height: 100%;
    }

    #image-placeholder > img {
        margin: auto;
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