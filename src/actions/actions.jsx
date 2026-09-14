export function addPoints (house, points) {
    const dispatch = {
            type: "ADD_POINTS",
            house: house,
            points: points
        }
    return dispatch  
}

export function removePoints (house, points) {
    const dispatch = {
            type: "REMOVE_POINTS",
            house: house,
            points: points
        }
    return dispatch  
}
