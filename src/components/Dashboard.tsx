import React from 'react';
import { WorkoutHistory } from './WorkoutHistory';
import { PersonalRecords } from './PersonalRecords';
import { ProgressCharts } from './ProgressCharts';
import { Activity, TrendingUp, Award, History } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { workouts } from '@/lib/data';

export function Dashboard() {
  // Calculate some summary statistics
  const totalWorkouts = workouts.length;
  const totalCalories = workouts.reduce((sum, workout) => sum + workout.calories, 0);
  const totalMinutes = workouts.reduce((sum, workout) => sum + workout.duration, 0);
  const totalExercises = workouts.reduce((sum, workout) => sum + workout.exercises.length, 0);

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold mb-6">Fitness Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Workouts
            </CardTitle>
            <History className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalWorkouts}</div>
            <p className="text-xs text-muted-foreground">
              Last 30 days
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Calories Burned
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCalories}</div>
            <p className="text-xs text-muted-foreground">
              +{Math.round(totalCalories/3)} from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Workout Minutes
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalMinutes}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round(totalMinutes/totalWorkouts)} mins per workout
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Exercises
            </CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalExercises}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round(totalExercises/totalWorkouts)} per workout
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <WorkoutHistory />
        <PersonalRecords />
        <ProgressCharts />
      </div>
    </div>
  );
}