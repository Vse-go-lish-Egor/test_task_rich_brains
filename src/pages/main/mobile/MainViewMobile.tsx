import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CourseCardMobile from '../../../components/mobile/CourseCardMobile';
import { Course } from '../../../model/Course';

type Props = {
  courses: Course[];
};

const MainViewMobile: React.FC<Props> = ({ courses }) => {
  return (
    <SafeAreaView>
      <FlatList
        data={courses}
        renderItem={({ item: course }) => (
          <CourseCardMobile
            course={course}
            height={330}
            onMoreInfo={() => console.log('MORE')}
            onAdd={() => console.log('ADD')}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MainViewMobile;
