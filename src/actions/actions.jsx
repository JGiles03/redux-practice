export const addPoints = (house) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_POINTS",
            payload: house
        })
    }
}

export const removePoints = (house) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_POINTS",
            payload: house
        })
    }
}