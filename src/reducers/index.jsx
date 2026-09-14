import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Gryffindor: 0,
  Hufflepuff: 0,
  Ravenclaw: 0,
  Slytherin: 0
};

const pointsSlice = createSlice({
  name: "points",
  initialState: initialState,
  reducers: {
    addPoints: (state, action) => {
      state[action.payload.house] = state[action.payload.house] + action.payload.points
    },
    removePoints: (state, action) => {
      state[action.payload.house] = state[action.payload.house] - action.payload.points
    }
  }
})

export const {addPoints, removePoints} = pointsSlice.actions
export default pointsSlice.reducer
