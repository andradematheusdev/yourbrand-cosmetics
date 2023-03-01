import { createContext, useState } from "react";

export interface ICarouselContext {
  activeSlider: number;
  setActiveSlider: Function;
}

interface IContextProps {
  children: React.ReactNode;
};

export const Context = createContext({} as ICarouselContext);

export function CarouselContext({ children }: IContextProps) {
  const [activeSlider, setActiveSlider] = useState(0);

  return <Context.Provider value={{activeSlider, setActiveSlider}}>{children}</Context.Provider>;
}