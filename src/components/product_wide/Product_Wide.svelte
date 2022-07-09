<script>
    export let product = {};
</script>

<a href="/{ "product/" + product.id }/{ encodeURIComponent( product.name ) }" class="h-[277px] w-[486px] overflow-hidden rounded-sm group">
    <!-- Product Image -->
    <header class="flex justify-center h-[60%] bg-white overflow-hidden">
        <figure class="my-auto">
            { #if product.image }
                <img class="group-hover:scale-125 duration-200" src="data:image/jpg;base64,{ product.image }" alt="Steamy" width="221" height="64">
            { :else }
                <img src="/steamy-logo.png" alt="Steamy" width="221" height="64">
            { /if }
        </figure>
    </header>
    <!-- Product Details -->
    <section class="flex flex-col bg-[#1A678A] h-[40%] p-3">
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
                { #if product.price || product.price === 0 }
                    { #if product.price === 0 }
                        <p class="text-[#ACDBF5]">FREEBIES</p>
                    { :else }
                        <p class="text-[#ACDBF5]">P{ product.price }</p>
                    { /if }
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
    </section>
</a>