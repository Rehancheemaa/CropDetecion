import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the user context
interface UserContextProps {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
}

// Default values for context
const UserContext = createContext<UserContextProps>({
  email: '',
  password: '',
  setEmail: () => {},
  setPassword: () => {},
});

// Provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <UserContext.Provider value={{ email, password, setEmail, setPassword }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use the context in components
export const useUserContext = () => useContext(UserContext);
