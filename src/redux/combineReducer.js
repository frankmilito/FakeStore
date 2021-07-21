import { combineReducers } from "redux";
import { productReducer } from "./reducers";

const rootReducers = combineReducers({
    product: productReducer
})

export default rootReducers