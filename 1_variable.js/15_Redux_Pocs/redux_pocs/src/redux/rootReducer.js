import ballReducer from "./ballReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    Ball:ballReducer
})

export default rootReducer