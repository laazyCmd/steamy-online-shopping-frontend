export const get = async ( { params } ) => {
    if ( !params.name ) return { status: 303, headers: { Location: params.id + "/test" } }
}