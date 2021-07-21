import { REMOVE_PRODUCT, SELECT_PRODUCT, SET_PRODUCTS } from "./constants"

const initialState={
    product:[],
    singleProduct:{}
}
export const productReducer =(state = initialState, action)=>{
    switch(action.type){
        case SET_PRODUCTS:
            return{
                ...state,
                product:action.payload
            }
        case SELECT_PRODUCT:
            return{
                ...state, 
                singleProduct:action.payload
            }
        case REMOVE_PRODUCT:
            return{
                ...state,
                singleProduct:{}
            }
        default: return state
    }
}