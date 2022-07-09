<script>
    import { onMount } from "svelte";
    export let sortBy, getProductList;
    let selectedSort = "Release date";
    let open_sorting = false;

    onMount( () => {
        window.addEventListener( "click", ( event ) => {
            if ( event.target?.parentNode.id !== "sort-button" ) open_sorting = false;
        } );

        const slots = document.getElementById( "sort-selection" ).children;
        for ( const slot of slots ) {
            if ( sortBy === slot.dataset.sort ) selectedSort = slot.innerText;
            slot.addEventListener( "click", ( e ) => {
                selectedSort = slot.innerText;
                getProductList( slot.dataset.sort );
            } ) ;
        }
    } );
</script>

<button id="sort-button" on:click={ () => open_sorting = !open_sorting }>
    <p class="flex justify-between items-center text-[#67C1F5] bg-[#213A4C] rounded-sm px-[8px] gap-x-[10px] w-[145px] fill-white hover:text-white hover:bg-[#5199c2]">
        { selectedSort }
        <figure>
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="18" height="18"><path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z"/></svg>
        </figure>
    </p>
    <ul id="sort-selection" 
    class="absolute text-left w-full mt-[5px] bg-[#417a9b] hidden" 
    class:sort-selection_show={ open_sorting }>
        <slot/>
    </ul>
</button>

<style>
    .sort-selection_show {
        display: block;
    }

    :global( #sort-selection > * ) {
        display: block;
        text-align: left;
        width: 100%;
        height: 100%;
        padding: 2px 10px;
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem; /* 20px */
    }

    :global( #sort-selection > *:hover ) {
        --tw-gradient-from: #67c1f5;
        --tw-gradient-to: rgb(103 193 245 / 0);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
    }
</style>