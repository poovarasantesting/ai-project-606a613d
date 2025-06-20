import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Dumbbell, Flame } from 'lucide-react';
import { Workout } from '@/lib/types';
import { workouts } from '@/lib/data';

export function WorkoutHistory() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Dumbbell className="mr-2 h-5 w-5" />
          Recent Workouts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Calories</TableHead>
              <TableHead>Exercises</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workouts.map((workout) => (
              <TableRow key={workout.id}>
                <TableCell className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  {new Date(workout.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge variant={workout.type === 'Strength' ? 'default' : 'secondary'}>
                    {workout.type}
                  </Badge>
                </TableCell>
                <TableCell className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  {workout.duration} min
                </TableCell>
                <TableCell className="flex items-center">
                  <Flame className="mr-2 h-4 w-4 text-muted-foreground" />
                  {workout.calories}
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {workout.exercises.map((exercise) => (
                      <Badge key={exercise.id} variant="outline">
                        {exercise.name}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}