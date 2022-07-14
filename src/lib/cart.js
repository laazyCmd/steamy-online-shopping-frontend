import { writable } from "svelte/store";
import { browser } from "$app/env";

export const cartList = writable( [] );

const checkCookie = () => {
    document.cookie.split( ";" ).map( c => {
        const cookie = c.split( "=" );
        if ( cookie[0].trim() === "cart" && cookie[1] !== "[]" ) cartList.update( list => list = JSON.parse( cookie[1] ) );
    });
}

if ( browser ) {
    const date = new Date();
    date.setDate( date.getDate() + 1 );
            
    checkCookie();
    cartList.subscribe( list => document.cookie = "cart=" + JSON.stringify( list ) + "; expires=" + date.toUTCString() + "; SameSite=None; Secure" );
}