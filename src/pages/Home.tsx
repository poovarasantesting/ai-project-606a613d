import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      <h1 className="text-4xl font-bold tracking-tight">Welcome to Our Platform</h1>
      <p className="text-muted-foreground text-center max-w-2xl">
        Create an account to get started with all our features or login if you already have an account.
      </p>
      <div className="flex gap-4">
        <Button asChild variant="default">
          <Link to="/register">Register</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}