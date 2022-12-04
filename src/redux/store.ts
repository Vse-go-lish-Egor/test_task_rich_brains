import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { courseSlice } from './course/slice';
import { themeSlice } from './theme/slice';

const rootReducer = combineReducers({
  [themeSlice.name]: themeSlice.reducer,
  [courseSlice.name]: courseSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
