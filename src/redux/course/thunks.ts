import { createAsyncThunk } from '@reduxjs/toolkit';
import { Course } from '../../model/Course';
import { getCourses } from '../../service/course';

export const getCoursesThunk = createAsyncThunk<Course[] | null, void>(
  'courses/getCoursesThunk',
  async () => {
    return getCourses();
  },
);
