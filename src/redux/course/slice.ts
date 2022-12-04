import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { Course } from '../../model/Course';
import { RootState } from '../types';
import { getCoursesThunk } from './thunks';

const courseAdapter = createEntityAdapter<Course>({
  selectId: course => course.id,
  sortComparer: (a, b) => a.id - b.id,
});

const initialState = courseAdapter.getInitialState<{
  isLoading: boolean;
  error?: string;
}>({
  isLoading: false,
});

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCoursesThunk.pending, state => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(getCoursesThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.name;
    });
    builder.addCase(getCoursesThunk.fulfilled, (state, action) => {
      courseAdapter.addMany(state, action.payload!);
      state.isLoading = false;
    });
  },
});

const coursesStateSelector = (state: RootState) => state.course;

export const { selectAll: selectAllCourses } =
  courseAdapter.getSelectors(coursesStateSelector);
export const coursesLoadingSelector = createSelector(
  coursesStateSelector,
  state => state.isLoading,
);
