<div id="login-page">
    <header>
        <p>LOG IN</p>
    </header>
    <div id="login-join">
        <section id="login">
            <div id="input-fields">
                <label for="email">Steamy email address</label>
                <input type="text" id="email" required>
                <label for="email">Password</label>
                <input type="password" id="email" required>
            </div>
            <button id="sign-in">
                Sign In
            </button>
        </section>
        <section id="join-steam">
            <header>
                <p>Join Steamy and discover (definitely not) thousands of products to buy.</p>
                <a href="/about">Learn More</a>
            </header>
            <div id="join">
                <p>It's free and easy to use.</p>
                <a href="/join">Join Steam</a>
            </div>
        </section>
    </div>
</div>

<style>
    #login-page {
        width: 80%;
        align-self: center;
    }

    #login-page > header {
        margin-bottom: 1rem;
    }

    #login-page > header p {
        font-size: 1.875rem; /* 30px */
        line-height: 2.25rem; /* 36px */
    }

    #login-join {
        display: flex;
    }

    #login {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
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

    #sign-in {
        align-self: center;
        background-color: #358DE6;
        width: 211px;
        height: 43px;
        font-size: 1.125rem; /* 18px */
        line-height: 1.75rem; /* 28px */
        border-radius: 2px;
        text-shadow: 0px 2px 4px rgba( 0, 0, 0, 0.5 );
    }

    #sign-in:hover {
        background-color: #41aff7;
    }

    #join-steam {
        display: flex;
        flex-direction: column;
        row-gap: 18px;
        width: 50%;
    }

    #join-steam header {
        align-self: center;
        text-align: center;
        width: 60%;
    }

    #join-steam header > p {
        color: #B8B6B4;
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem; /* 20px */
    }

    #join-steam header > a {
        display: block;
        margin: 13px 0;
    }

    #join-steam header > a:hover {
        color: #66beee;
    }

    #join {
        align-self: center;
        text-align: center;
    }

    #join > p {
        color: #B8B6B4;
    }

    #join > a {
        display: inline-block;
        border: 1px solid #747679;
        padding: 3px 1rem;
        border-radius: 2px;
        margin: 10px 0;
    }

    #join > a:hover {
        border-color: white;
    }
</style>