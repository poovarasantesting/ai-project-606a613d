import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MyApp
        </Link>
        
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            
            {user ? (
              <>
                <li>
                  <Link to="/dashboard" className="hover:text-primary">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Button variant="ghost" onClick={logout}>
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:text-primary">
                    Login
                  </Link>
                </li>
                <li>
                  <Button asChild variant="default" size="sm">
                    <Link to="/register">Register</Link>
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}