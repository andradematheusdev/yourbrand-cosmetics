import { createContext, useState } from "react";

export interface ISearchContext {
  isSearchOpen: boolean;
  setIsSearchOpen: Function;
}

interface IContextProps {
  children: React.ReactNode;
};

export const Context = createContext({} as ISearchContext);

export function SearchContext({ children }: IContextProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isSearchOpenPack = { isSearchOpen, setIsSearchOpen };

  return <Context.Provider value={isSearchOpenPack}>{children}</Context.Provider>;
}