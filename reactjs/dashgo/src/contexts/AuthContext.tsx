import { createContext, ReactNode } from "react";

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
} 

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function signIn({email, password}: SignInCredentials) {
    console.log({email, password});
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}