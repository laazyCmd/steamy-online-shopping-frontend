<script>
    import { cartList } from "$lib/cart.js";
    export let product = {};
    const productLink = typeof( product.id ) === undefined ? "/" : "/product/" + product.id + "/" + encodeURIComponent( product.name );

    const addToCart = () => {
        const newProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            stock: 1
        }
        
        for ( const [ index, item ] of $cartList.entries() ) {
            if ( item.id === product.id ) {
                $cartList[ index ].stock += 1;
                return;
            }
        }

        cartList.update( currentList => [ ...currentList, newProduct ] );
    }
</script>

<div class="w-[290px] h-[415px] bg-[#1A678A] group relative rounded-sm">
    <!-- Product Image -->
    <a href={ productLink } class="flex justify-center h-[60%] bg-white overflow-hidden rounded-t-sm">
        <figure class="my-auto">
            { #if product.image }
                <img class="group-hover:scale-125 duration-200" src="data:image/jpg;base64,{ product.image }" alt="Steamy" width="218" height="63">
            { :else }
                <img src="/steamy-logo.png" alt="Steamy" width="218" height="63">
            { /if }
        </figure>
    </a>
    <!-- Product Details -->
    <a href={ productLink } class="flex flex-col bg-[#1A678A] h-[40%] p-3 rounded-b-sm">
        <!-- Name -->
        <header class="h-full">
            { #if product.name }
                <p>{ product.name }</p>
            { :else }
                <span class="inline-block bg-white w-4/6 h-[23px] my-[3px] rounded-xl opacity-50"></span>
            { /if }
        </header>
        <!-- Price & Sales -->
        <div class="flex justify-between items-center">
            <p class="flex items-center bg-[#141F2C66] bg-opacity-40 px-3 py-[3px]">
                { #if product.price }
                    <p class="text-[#ACDBF5]">P{ product.price }</p>
                { :else }
                    <span class="inline-block bg-[#ACDBF5] w-[92px] h-[18px] opacity-50 rounded-xl my-[3px]"></span>
                { /if }
            </p>
            { #if product.sales }
                <p>{ product.sales } sold</p>
            { :else }
                <span class="inline-block bg-white w-[82px] h-[18px] opacity-50 rounded-xl my-[3px]"></span>
            { /if }
        </div>
    </a>
    <!-- add to cart -->
    { #if product }
        <button class="absolute hidden group-hover:inline-block text-center bg-[#64B3E1] w-full -translate-y-1 hover:bg-[#6EC3F4] text-md p-2 z-10"
        on:click={ addToCart }>
            ADD TO CART
        </button>
    { /if }
</div>

