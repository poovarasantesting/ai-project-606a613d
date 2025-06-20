import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy } from 'lucide-react';
import { personalRecords } from '@/lib/data';

export function PersonalRecords() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
          Personal Records
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {personalRecords.map((record) => (
            <div key={record.id} className="flex items-center justify-between border-b pb-2">
              <div>
                <h4 className="font-medium">{record.exercise}</h4>
                <p className="text-sm text-muted-foreground">
                  {new Date(record.date).toLocaleDateString()}
                </p>
              </div>
              <Badge variant="success" className="text-lg font-bold px-3 py-1">
                {record.value} {record.unit}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}