const initialState = {
  Gryffindor: 0,
  Hufflepuff: 0,
  Ravenclaw: 0,
  Slytherin: 0
};

function pointsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_POINTS':
      return {
        ...state,
        [action.house]: state[action.house] + action.points
      };
    case 'REMOVE_POINTS':
      return {
        ...state,
        [action.house]: state[action.house] - action.points
      };
    default:
      return state;
  }
}

export default pointsReducer;
