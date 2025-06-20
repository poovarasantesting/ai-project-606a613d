import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  register: (name: string, email: string, password: string) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user in localStorage on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = (name: string, email: string, password: string) => {
    // In a real app, this would be an API call to register the user
    // For now, we'll just simulate user creation
    console.log("Registering user:", { name, email, password });
    
    const newUser = {
      id: Math.random().toString(36).substring(2),
      name,
      email,
    };
    
    // Store in local storage for persistence
    localStorage.setItem("user", JSON.stringify(newUser));
    
    // Store credentials for login simulation
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ email, password, name });
    localStorage.setItem("users", JSON.stringify(users));
    
    setUser(newUser);
  };

  const login = (email: string, password: string): boolean => {
    // In a real app, this would validate credentials with an API
    console.log("Logging in user:", { email, password });
    
    // Get stored users
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find((u: any) => 
      u.email === email && u.password === password
    );
    
    if (foundUser) {
      const loggedInUser = {
        id: Math.random().toString(36).substring(2),
        name: foundUser.name,
        email: foundUser.email,
      };
      
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    console.log("Logging out user");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}