export type Course = {
  id: number;
  name: string;
  categoryName: string;
  imageUrl: string;
  educationLevel: string;
  startDates: string;
  duration: {
    min: number;
    max: number;
  };
  price: number;
};
