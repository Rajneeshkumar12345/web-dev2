import React, {useState} from 'react'
import { connect } from 'react-redux'
function Ball(props) {
  return (
    <>
    <h1>Balls</h1>
    <h2>No of Balls:{props.balls}</h2>
    <button
    onClick={props.buyBall}
    >+</button>
    <button
    onClick={props.sellBall}
    >-</button>
    </>
  )
}
// to get your state variable from redux store, dispatch
const mapStateToProps = (store) => {
    console.log(store);
    return store.Ball;
}
const mapDispatchtoProps = (dispatch) => {
    return {
        sellBall: () => {
            dispatch({
                type: "decreament"
            })
        },
        buyBall: () => {
            dispatch({
                type: "increament"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Ball);