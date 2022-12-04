import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import AppTheme from '../../navigation/AppTheme';
import { RootState } from '../types';

const theme: AppTheme = {
  colors: {
    backgroundColorPrimary: 'white',
    backgroundColorSecondary: '#259609',
    textColor1: '#3E3E3E',
    textColor2: '#259609',
    textColor3: 'white',
    borderShadow: 'rgba(0, 0, 0, 0.2)',
  },
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: theme,
  reducers: {
    changeTheme(state, action: PayloadAction<AppTheme>) {
      state = action.payload;
    },
  },
});
export const themeSelector = createSelector(
  (state: RootState) => state,
  state => state.theme,
);
export const { changeTheme } = themeSlice.actions;
