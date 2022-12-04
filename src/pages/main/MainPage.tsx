import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import {
  coursesLoadingSelector,
  selectAllCourses,
} from '../../redux/course/slice';
import { getCoursesThunk } from '../../redux/course/thunks';
import { useAppDispatch } from '../../redux/hooks';
import { themeSelector } from '../../redux/theme/slice';
import MainViewMobile from './mobile/MainViewMobile';
import MainViewWeb from './web/MainViewWeb';

const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const courses = useSelector(selectAllCourses);
  const isLoading = useSelector(coursesLoadingSelector);
  const { colors } = useSelector(themeSelector);

  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(getCoursesThunk());
  }, [dispatch]);

  useEffect(() => {
    console.log(courses);
  }, [courses]);

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={colors.textColor2} />
      </View>
    );
  }
  if (width < 600) {
    return <MainViewMobile courses={courses} />;
  } else {
    return <MainViewWeb courses={courses} />;
  }
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainPage;
