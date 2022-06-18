<script>
    import Input_ButtonWithin from "$components/input_buttonwithin/Input_ButtonWithin.svelte";
</script>

<nav class="bg-[#171A21] text-white">
    <div class="flex justify-end gap-x-[18px] mx-auto max-w-[1307px] pt-[5px] text-opacity-25">
        <section class="flex gap-x-[13px] items-center">
            <!-- Help -->
            <a class="flex items-center text-sm gap-x-[5px] hover:opacity-75" href="/help">
                <!-- TODO: fix this icon -->
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="18" height="18"><path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28"/><circle cx="250" cy="348" r="20"/></svg>
                </figure>
                Help
            </a>
            <!-- Language -->
            <button class="flex items-center text-sm gap-x-[5px] hover:opacity-75">
                Language
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="18" height="18"><path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="white"/></svg>
            </button>
        </section>
        <section class="flex gap-x-[13px] items-center">
            <!-- Login -->
            <button class="text-sm font-semibold hover:opacity-75">
                Login
            </button>
            <span>|</span>
            <!-- Sign up -->
            <button class="text-sm font-semibold hover:opacity-75">
                Sign up
            </button>
        </section>
    </div>
    <header class="flex justify-around items-center mx-auto max-w-[1077px] mt-[4px] pb-11">
        <!-- Logo -->
        <a href="/">
            <figure>
                <img src="/steamy-logo.png" alt="Steamy" width="176" height="51">
            </figure>
        </a>
        <!-- Input & navigation links/buttons -->
        <div>
            <Input_ButtonWithin/>
            <section class="flex absolute gap-x-8 text-xl mt-4">
                <a class="hover:opacity-75" href="/">STORE</a>
                <a class="hover:opacity-75" href="/search">NEW & POPULAR</a>
                <button class="hover:opacity-75">CATEGORIES</button>
                <a class="hover:opacity-75" href="/about">ABOUT</a>
            </section>
        </div>
        <!-- Cart -->
        <button class="hover:opacity-75">
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="59" height="59"><circle cx="176" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="400" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M48 80h64l48 272h256"/><path d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
            </figure>
        </button>
    </header>
</nav>