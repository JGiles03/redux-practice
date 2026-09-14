import { configureStore } from '@reduxjs/toolkit'
import pointsReducer from './reducers';

const store = configureStore({
  reducer: pointsReducer,
});

export default store;