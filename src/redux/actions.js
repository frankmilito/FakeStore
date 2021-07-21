import { REMOVE_PRODUCT, SELECT_PRODUCT, SET_PRODUCTS } from "./constants"

// export const getProducts = product= async (dispatch)=>
export const setProducts = product => {
    return{
        type: SET_PRODUCTS,
        payload: product
    }
}
export const selectedProduct = product => {
    return{
        type: SELECT_PRODUCT,
        payload: product
    }
}

export const clearProducts = ()=>{
    return{
        type: REMOVE_PRODUCT
    }
}