import React, {useState} from 'react'
import { connect } from 'react-redux'
export default function Ball(props) {
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
    return store;
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