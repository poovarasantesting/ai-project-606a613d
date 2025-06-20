export type Workout = {
  id: string;
  date: string;
  type: string;
  duration: number;
  calories: number;
  exercises: Exercise[];
};

export type Exercise = {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
};

export type PersonalRecord = {
  id: string;
  exercise: string;
  value: number;
  date: string;
  unit: string;
};

export type ProgressData = {
  date: string;
  value: number;
};