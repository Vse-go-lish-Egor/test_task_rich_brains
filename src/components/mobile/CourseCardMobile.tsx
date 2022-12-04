import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Course } from '../../model/Course';
import { themeSelector } from '../../redux/theme/slice';
import AppButton from '../common/AppButton';
import CircularButton from '../common/CircularButton';
import Row from '../common/Row';
import SizedBox from '../common/SizedBox';

type Props = {
  width?: number;
  height: number;
  course: Course;
  onAdd: () => void;
  onMoreInfo: () => void;
};

const CourseCardMobile: React.FC<Props> = ({
  course,
  onAdd,
  height,
  onMoreInfo,
  width,
}) => {
  const { colors } = useSelector(themeSelector);

  return (
    <View
      style={[
        {
          width,
          height,
          borderTopColor: colors.backgroundColorSecondary,
          borderColor: colors.borderShadow,
        },
        styles.card,
      ]}
    >
      <Row>
        <View style={styles.center}>
          <CircularButton color={colors.textColor2} radius={30} onPress={onAdd}>
            <Text
              style={[
                styles.buttonText,
                {
                  color: colors.textColor3,
                },
              ]}
            >
              +
            </Text>
          </CircularButton>
        </View>
        <View style={styles.spacer} />
        <Image
          style={styles.logo}
          source={{ uri: course.imageUrl }}
          resizeMode="contain"
        />
      </Row>
      <SizedBox height={12} />
      <Text style={[styles.categoryText, { color: colors.textColor2 }]}>
        {course.categoryName}
      </Text>
      <Text style={[styles.courseNameText, { color: colors.textColor1 }]}>
        {course.name}
      </Text>
      <Text style={{ color: colors.textColor1 }}>{course.educationLevel}</Text>
      <View style={styles.spacer} />
      <Text style={styles.price}>£{course.price}</Text>
      <SizedBox height={14} />
      <AppButton
        color={colors.backgroundColorSecondary}
        text="MORE INFO"
        textColor={colors.textColor3}
        onPress={onMoreInfo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    padding: 10,
    borderRadius: 2,
    borderTopWidth: 6,
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 13,
  },
  center: {
    justifyContent: 'center',
  },
  spacer: {
    flex: 1,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '100',
    textAlign: 'center',
  },
  courseNameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    flex: 2,
  },
  price: {
    fontWeight: 'bold',
  },
});

export default CourseCardMobile;
