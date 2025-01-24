import { useState, useContext, createContext } from 'react';

const AuthContext = createContext<{ 
  user: any; 
  setUser: React.Dispatch<React.SetStateAction<any>> 
} | null>(null);


export const AuthProvider = ({children}: any) => {

  const [user, setUser] = useState(null);
  return (
    < AuthContext.Provider value={{ user, setUser }} >
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;

};
