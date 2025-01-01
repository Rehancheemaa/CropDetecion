import React, { createContext, useState, useContext } from 'react';

// Define the types for the context
type AuthContextType = {
  user: { email: string; password: string } | null;
  register: (email: string, password: string) => void;
  login: (email: string, password: string) => boolean;
};

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<{ email: string; password: string } | null>(null);

  const register = (email: string, password: string) => {
    setUser({ email, password });
  };

  const login = (email: string, password: string) => {
    return user?.email === email && user?.password === password;
  };

  return (
    <AuthContext.Provider value={{ user, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
