import { createStore } from "redux";
import rootReducers from "./combineReducer";

const store = createStore(rootReducers, {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store