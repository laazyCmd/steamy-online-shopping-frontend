<script lang="ts">
    import { onMount } from "svelte";
    let carousel_pages: number = 1;
    let current_index: number = 0;
    let last_index: number = 0;

    const switchPage = ( new_index: number ) => {
        if ( new_index === current_index ) return;

        last_index = current_index;
        if ( new_index >= carousel_pages ) current_index = 0;
        else if ( new_index < 0 ) current_index = carousel_pages - 1;
        else current_index = new_index;
        
        const carousel_slide = document.getElementById( "carousel-slide" );
        carousel_slide?.children[ current_index ].classList.add( "selected-page" );
        carousel_slide?.children[ last_index ].classList.remove( "selected-page" );
    }

    onMount( () => {
        const carousel_slide = document.getElementById( "carousel-slide" );
        carousel_slide?.children[ 0 ].classList.add( "selected-page" );
        carousel_pages = carousel_slide?.children.length ?? 1;
    } );
</script>

<section class="relative">
    <div id="prev-arrow" class="absolute flex justify-center h-full flex-col -translate-x-12">
        <button class="items-center bg-gradient-to-r hover:from-[#45657a] from-[#102330] to-[#203153] h-[108px]"
            on:click={ () => switchPage( current_index - 1 )}>
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="45" height="56"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/></svg>
            </figure>
        </button>
    </div>
    <div id="carousel-content" class="flex overflow-hidden">
        <div id="carousel-slide" class="relative flex w-full">
            <slot></slot>
        </div>
    </div>
    <div id="next-arrow" class="absolute flex top-0 justify-center h-full flex-col right-0 translate-x-12">
        <button class="items-center bg-gradient-to-r from-[#203153] hover:to-[#45657a] to-[#102330] h-[108px]"
            on:click={ () => switchPage( current_index + 1 ) }>
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="45" height="56"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144"/></svg>
            </figure>
        </button>
    </div>
</section>
<div id="carousel-dots" class="flex mt-3 gap-x-2 justify-center">
    { #each Array( carousel_pages ) as _, index }
        <span 
            class="inline-block bg-[#767f8a] w-[15px] h-[9px] rounded-sm cursor-pointer hover:opacity-75 opacity-50 duration-200"
            class:selected-dot={ current_index === index }
            on:click={ () => switchPage( index ) }></span>
    { /each }
</div>

<style>
    :global( #carousel-slide > * ) {
        position: absolute;
        transform: translateX( 100% );
        opacity: .5;
    }

    :global( #carousel-slide > .selected-page ) {
        min-width: 100%;
        transition: opacity 200ms ease-in;
        position: relative;
        transform: translateX( 0% );
        opacity: 1;
    }

    :global( .selected-dot ) {
        opacity: 1;
    }
</style>