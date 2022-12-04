import { Course } from '../model/Course';
import delay from '../utlls/delay';

const courses: Course[] = [
  {
    name: 'Master of Business Administration (CMI',
    categoryName: 'Business & Management',
    educationLevel: 'Postgraduate',
    startDates: 'Every 12 weeks ',
    duration: {
      min: 24,
      max: 48,
    },
    id: 0,
    imageUrl: 'https://alivaria.by/media/22358/corporate-logo.png',
    price: 32000,
  },
  {
    name: 'Doctor of Business Administration (CMI',
    categoryName: 'Business & Management',
    educationLevel: 'Postgraduate',
    startDates: 'Every 12 weeks ',
    duration: {
      min: 24,
      max: 48,
    },
    id: 1,
    imageUrl: 'https://alivaria.by/media/22358/corporate-logo.png',
    price: 12000,
  },
  {
    name: 'Bachelor of Business Administration (CMI',
    categoryName: 'Business & Management',
    educationLevel: 'Postgraduate',
    startDates: 'Every 12 weeks ',
    duration: {
      min: 24,
      max: 48,
    },
    id: 2,
    imageUrl: 'https://alivaria.by/media/22358/corporate-logo.png',
    price: 32000,
  },
  {
    name: 'Proffesor of Business Administration (CMI',
    categoryName: 'Business & Management',
    educationLevel: 'Postgraduate',
    startDates: 'Every 12 weeks ',
    duration: {
      min: 24,
      max: 48,
    },
    id: 3,
    imageUrl: 'https://alivaria.by/media/22358/corporate-logo.png',
    price: 32000,
  },
  {
    name: 'Master of Computer Science (MCS)',
    categoryName: 'IT',
    educationLevel: 'Postgraduate',
    startDates: 'Every 12 months ',
    duration: {
      min: 48,
      max: 64,
    },
    id: 4,
    imageUrl: 'https://alivaria.by/media/22358/corporate-logo.png',
    price: 48000,
  },
  {
    name: 'Master of Business Administration (CMI',
    categoryName: 'Business & Management',
    educationLevel: 'Postgraduate',
    startDates: 'Every 12 weeks ',
    duration: {
      min: 24,
      max: 48,
    },
    id: 5,
    imageUrl: 'https://alivaria.by/media/22358/corporate-logo.png',
    price: 32000,
  },
  {
    name: 'Master of Business Administration (CMI',
    categoryName: 'Business & Management',
    educationLevel: 'Postgraduate',
    startDates: 'Every 12 weeks ',
    duration: {
      min: 24,
      max: 48,
    },
    id: 6,
    imageUrl: 'https://alivaria.by/media/22358/corporate-logo.png',
    price: 32000,
  },
  {
    name: 'Master of Business Administration (CMI',
    categoryName: 'Business & Management',
    educationLevel: 'Postgraduate',
    startDates: 'Every 12 weeks ',
    duration: {
      min: 24,
      max: 48,
    },
    id: 7,
    imageUrl: 'https://alivaria.by/media/22358/corporate-logo.png',
    price: 32000,
  },
];

export const getCourses = async (): Promise<Course[]> => {
  await delay(3000);

  return courses;
};
