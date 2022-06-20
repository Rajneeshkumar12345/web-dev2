import React, {useState, useReducer} from 'react';

function reducer(state, action){
    switch (action.type) {
        case "increament":
            return state + 1;
        case "decreament":
            return state - 1;    
            default :
            console.log("Wrong Type")
    }
}

export default function Ball() {
    // let [balls, setBalls] = useState(0)
    // const increament = () => {
    //     setBalls(balls+1)
    // }
    // const decreament = () => {
    //     setBalls(balls-1)
    // }
    const [balls, dispatch] = useReducer(reducer, 10);

  return (
   <>
   <h1>Balls</h1>
   <h2>No of Balls: {balls}</h2>
   {/* <button onClick={increament}>+</button>
   <button onClick={decreament}>-</button> */}
   <button onClick= {() => {dispatch({type: "increament"})}}>+</button>
   <button onClick={() => {dispatch({type: "decreament"})}}>-</button>
   </>
  )
}

