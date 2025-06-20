import React from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="outline" onClick={logout}>Logout</Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user.name}!</CardTitle>
          <CardDescription>This is your personal dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <p>You are logged in with: {user.email}</p>
          <p className="text-muted-foreground mt-4">
            This is a protected page that only logged-in users can access.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}