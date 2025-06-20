import { Workout, PersonalRecord, ProgressData } from './types';

// Mock workout data
export const workouts: Workout[] = [
  {
    id: '1',
    date: '2025-04-20',
    type: 'Strength',
    duration: 60,
    calories: 450,
    exercises: [
      { id: '1-1', name: 'Bench Press', sets: 4, reps: 8, weight: 175 },
      { id: '1-2', name: 'Squats', sets: 4, reps: 10, weight: 225 },
      { id: '1-3', name: 'Deadlift', sets: 3, reps: 6, weight: 315 }
    ]
  },
  {
    id: '2',
    date: '2025-04-18',
    type: 'Cardio',
    duration: 45,
    calories: 380,
    exercises: [
      { id: '2-1', name: 'Treadmill', sets: 1, reps: 1, weight: 0 },
      { id: '2-2', name: 'Rowing', sets: 3, reps: 1, weight: 0 }
    ]
  },
  {
    id: '3',
    date: '2025-04-15',
    type: 'Strength',
    duration: 65,
    calories: 520,
    exercises: [
      { id: '3-1', name: 'Pull-ups', sets: 4, reps: 8, weight: 0 },
      { id: '3-2', name: 'Shoulder Press', sets: 3, reps: 10, weight: 95 },
      { id: '3-3', name: 'Lunges', sets: 3, reps: 12, weight: 120 }
    ]
  }
];

// Mock personal records data
export const personalRecords: PersonalRecord[] = [
  { id: '1', exercise: 'Bench Press', value: 225, date: '2025-04-10', unit: 'lbs' },
  { id: '2', exercise: 'Deadlift', value: 350, date: '2025-04-05', unit: 'lbs' },
  { id: '3', exercise: 'Squat', value: 275, date: '2025-03-28', unit: 'lbs' },
  { id: '4', exercise: '5K Run', value: 22.5, date: '2025-04-12', unit: 'min' }
];

// Mock progress data for charts
export const strengthProgress: ProgressData[] = [
  { date: '2025-01-01', value: 180 },
  { date: '2025-01-15', value: 190 },
  { date: '2025-02-01', value: 195 },
  { date: '2025-02-15', value: 200 },
  { date: '2025-03-01', value: 205 },
  { date: '2025-03-15', value: 210 },
  { date: '2025-04-01', value: 215 },
  { date: '2025-04-15', value: 225 }
];

export const weightProgress: ProgressData[] = [
  { date: '2025-01-01', value: 185 },
  { date: '2025-01-15', value: 183 },
  { date: '2025-02-01', value: 181 },
  { date: '2025-02-15', value: 179 },
  { date: '2025-03-01', value: 178 },
  { date: '2025-03-15', value: 176 },
  { date: '2025-04-01', value: 175 },
  { date: '2025-04-15', value: 173 }
];

export const cardioProgress: ProgressData[] = [
  { date: '2025-01-01', value: 28 },
  { date: '2025-01-15', value: 27 },
  { date: '2025-02-01', value: 26 },
  { date: '2025-02-15', value: 25 },
  { date: '2025-03-01', value: 24 },
  { date: '2025-03-15', value: 23 },
  { date: '2025-04-01', value: 23 },
  { date: '2025-04-15', value: 22.5 }
];