export const get = async ( { params } )  => {
    const req = await fetch( "http://localhost:8093/product/" + params.id );
    if ( req.status === 404 ) throw "Product not found.";

    const product = await req.json();
    if ( product.name === decodeURIComponent( params.name ) ) {
        return { body: { product } }
    }

    return { 
        status: 302,
        headers: { Location: encodeURIComponent( product.name ) },
    }
}