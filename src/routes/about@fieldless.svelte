<svelte:head>
    <title>Steamy, The Fake E-Commerce Website</title>
</svelte:head>

<div id="about-page">
    <header>
        <figure>
            <img src="/steamy-logo.png" alt="Steamy">
        </figure>
        <p>Blah blah blah, Steamy. Blah blah blah, fake e-commerce website that sells electronic products.</p>
    </header>
    <div id="stats-button">
        <div id="page-stats">
            <!-- Customers Online -->
            <section class="stats-section">
                <header>
                    <figure id="customers-online">
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="16" height="16"><path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"/></svg>
                    </figure>
                    <p>CUSTOMERS ONLINE</p>
                </header>
                <p>123,456,789</p>
            </section>
            <!-- Products Sold -->
            <section class="stats-section">
                <header>
                    <figure id="products-sold">
                        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="16" height="16"><path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z"/></svg>
                    </figure>
                    <p>PRODUCTS SOLD</p>
                </header>
                <p>1 MORBILLION</p>
            </section>
        </div>
        <a href="/search">
            START SHOPPING
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="35" height="35"><circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"/><path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            </figure>
        </a>
    </div>
    <!-- Learn More -->
    <button>
        LEARN MORE
        <figure>
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="33" height="33"><title>Caret Down</title><path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"/></svg>
        </figure>
    </button>
</div>

<style>
    #about-page {
        display: inline-flex;
        flex-direction: column;
        align-self: flex-start;
        row-gap: 1.25rem;
        width: 100%;
    }

    #about-page > header {
        display: flex;
        flex-direction: column;
        row-gap: 1.25rem;
    }

    #about-page > header > p {
        font-size: 1.25rem; /* 20px */
        line-height: 1.75rem; /* 28px */
        width: 45%;
    }

    #stats-button {
        display: flex;
        flex-direction: column;
        row-gap: 1.5rem;
        align-self: flex-start;
    }

    #page-stats {
        display: flex;
        column-gap: 3rem;
    }

    .stats-section > header {
        display: flex;
        align-items: center;
        column-gap: 5px;
    }

    #customers-online > svg {
        fill: #2EBFFF;
    }

    #products-sold > svg {
        fill: #BAFF2E;
    }

    .stats-section > header > p {
        font-size: 0.75rem; /* 12px */
        line-height: 1rem; /* 16px */
        color: #D5D7D8;
    }

    .stats-section > p {
        font-size: 1.875rem; /* 30px */
        line-height: 2.25rem; /* 36px */
        margin: 5px 0;
    }

    #stats-button > a {
        display: flex;
        align-items: center;
        align-self: flex-start;
        background-color: #12A6FF;
        padding: 7px 1rem;
        border-radius: 2px;
        column-gap: 3rem;
        font-size: 1.25rem; /* 20px */
        line-height: 1.75rem; /* 28px */
    }

    #stats-button > a:hover {
        background-color: #06bfff;
    }

    #about-page > button {
        color: #6B6B6B;
        fill: #6B6B6B;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
        margin: 3rem 0;
    }

    #about-page > button > figure > svg {
        transition: transform 200ms ease-in-out;
    }

    #about-page > button:hover > figure > svg {
        transform: translateY(10%);
    }
</style>