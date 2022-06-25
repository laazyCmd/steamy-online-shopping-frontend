export const get = async ( { params } ) => {
    console.log( "lmao" );
    return { body: { test: params.id, name: params.name } }
}