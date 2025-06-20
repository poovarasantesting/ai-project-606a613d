import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart2, Weight, Timer } from 'lucide-react';
import { strengthProgress, weightProgress, cardioProgress } from '@/lib/data';

export function ProgressCharts() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center">
          <BarChart2 className="mr-2 h-5 w-5" />
          Progress Charts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="strength">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="strength" className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-2 h-4 w-4"
              >
                <path d="M6 18V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12" />
                <path d="M4 21h16" />
                <path d="M7 9h10" />
                <path d="M7 12h10" />
                <path d="M7 15h10" />
              </svg>
              Strength
            </TabsTrigger>
            <TabsTrigger value="weight" className="flex items-center">
              <Weight className="mr-2 h-4 w-4" />
              Weight
            </TabsTrigger>
            <TabsTrigger value="cardio" className="flex items-center">
              <Timer className="mr-2 h-4 w-4" />
              Cardio
            </TabsTrigger>
          </TabsList>
          <TabsContent value="strength">
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={strengthProgress}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={(date) => new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                  />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`${value} lbs`, 'Bench Press']}
                    labelFormatter={(date) => new Date(date).toLocaleDateString()}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#6366f1" 
                    strokeWidth={2} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-center text-sm text-muted-foreground mt-2">Bench Press (lbs)</p>
            </div>
          </TabsContent>
          <TabsContent value="weight">
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weightProgress}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={(date) => new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                  />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`${value} lbs`, 'Body Weight']}
                    labelFormatter={(date) => new Date(date).toLocaleDateString()}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#10b981" 
                    strokeWidth={2} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-center text-sm text-muted-foreground mt-2">Body Weight (lbs)</p>
            </div>
          </TabsContent>
          <TabsContent value="cardio">
            <div className="h-[300px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cardioProgress}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={(date) => new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                  />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`${value} min`, '5K Time']}
                    labelFormatter={(date) => new Date(date).toLocaleDateString()}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#ef4444" 
                    strokeWidth={2} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-center text-sm text-muted-foreground mt-2">5K Run Time (minutes)</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}