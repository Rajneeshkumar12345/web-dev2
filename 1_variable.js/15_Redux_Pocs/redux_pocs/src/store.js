// npm i redux react-redux
import {createStore} from "redux";
import rootReducer from "./redux/rootReducer";
const store = createStore(rootReducer);
console.log(store.getState())
export default store;