
import './App.css';
import Ball from './components/Ball';
//import Bat from './components/Bat';
//import BatuseReducer from './components/BatuseReducer';

import store from "./store"
import {Provider} from "react-redux"


function App() {
  return (
    // <>
    // <Ball></Ball>
    // <Bat></Bat>
    // <BatuseReducer></BatuseReducer>
    // </>
    <>
    <Provider store={store}>
    <Ball></Ball>
    </Provider>
    
    </>
    
    
  );
}

export default App;
 