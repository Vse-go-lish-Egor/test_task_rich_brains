import React from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CourseCardMobile from '../../../components/mobile/CourseCardMobile';
import { Course } from '../../../model/Course';

type Props = {
  courses: Course[];
};

const MainViewWeb: React.FC<Props> = ({ courses }) => {
  const { width } = useWindowDimensions();
  const numCount = width < 1000 ? 2 : 3;
  return (
    <SafeAreaView>
      <FlatList
        key={numCount}
        data={courses}
        numColumns={numCount}
        renderItem={({ item: course }) => (
          <CourseCardMobile
            course={course}
            width={300}
            height={400}
            onMoreInfo={() => console.log('MORE')}
            onAdd={() => console.log('ADD')}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MainViewWeb;
