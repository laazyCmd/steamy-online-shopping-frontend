<script>
    export let rating = 0;
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="zero" class:one={ rating === 1 } viewBox="0 0 512 512" width={ $$props.width ?? 28 } height={ $$props.height ?? 25 }><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" stroke-linejoin="round" stroke-width="20"/></svg>

<style>
    .zero {
        fill: none;
        stroke: currentColor;
    }

    .one {
        fill: #FFBB00;
        stroke: #F49F30;
    }
</style>