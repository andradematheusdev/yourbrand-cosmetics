import { createContext, useState } from "react";

export interface IUserAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
}

interface IContextProps {
  children: React.ReactNode;
};

export const Context = createContext({} as IUserAuthContext);

export function UserAuthContext({ children }: IContextProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return <Context.Provider value={{isAuthenticated, setIsAuthenticated}}>{children}</Context.Provider>;
}