let initialState = 10;
function ballReducer(state = initialState, action) {
    switch (action.type) {
        case "increament":
            return {
                balls: state.balls + 1
            }
        case "decreament":
            return {
                balls: state.balls - 1
            }
        default:
            console.log("Wrong type")        
    }
}
export default ballReducer