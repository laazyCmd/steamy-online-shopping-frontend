export const get = async ( { params } )  => {
    const req = await fetch( "http://localhost:8093/product/" + params.id );
    if ( req.status === 404 ) throw "Product not found.";

    const product = await req.json();
    console.log( product );
    return { 
        status: 302,
        headers: { Location: params.id + "/" + encodeURIComponent( product.name ) },
    }
}