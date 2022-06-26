<div id="join-page">
    <header>
        <p>CREATE YOUR ACCOUNT</p>
    </header>
    <section id="input-fields">
        <label for="email">Email address</label>
        <input type="text" id="email" required>
        <label for="email">Confirm your email address</label>
        <input type="text" id="email" required>
        <label for="email">Password</label>
        <input type="password" id="email" required>
    </section>
    <!-- TODO: add captcha here, if possible -->
    <button id="sign-up">
        Register
    </button>
</div>

<style>
    #join-page {
        display: inline-flex;
        flex-direction: column;
        row-gap: 1rem;
        align-self: flex-start;
    }

    #join-page > header p {
        font-size: 1.875rem; /* 30px */
        line-height: 2.25rem; /* 36px */
    }

    #input-fields {
        display: flex;
        flex-direction: column;
    }

    #input-fields label {
        color: #B8B6B4;
    }

    #input-fields input {
        outline: none;
        width: 353px;
        height: 40px;
        background-color: #32353C;
        border-radius: 2px;
        padding: 0 12px;
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem; /* 20px */
        margin-top: 5px;
        margin-bottom: 13px;
    }

    #sign-up {
        align-self: center;
        background-color: #358DE6;
        width: 211px;
        height: 43px;
        font-size: 1.125rem; /* 18px */
        line-height: 1.75rem; /* 28px */
        border-radius: 2px;
        text-shadow: 0px 2px 4px rgba( 0, 0, 0, 0.5 );
    }

    #sign-up:hover {
        background-color: #41aff7;
    }
</style>