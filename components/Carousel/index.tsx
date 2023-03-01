import { useContext } from "react";
import { Context } from "../../contexts/CarouselContext";
import CarouselDots from "./CarouselDots";
import CarouselImage from "./CarouselImage";
import { CarouselNavigationLeft, CarouselNavigationRight } from "./CarouselNavigation";

interface IData {
  Data: {
    id: number;
    image: string;
  }[];
}

export const Carousel = (props: IData) => {
  const {activeSlider, setActiveSlider} = useContext(Context);
  return (
      <div className="flex w-full flex-col h-[600px] max-h-[600px] justify-between relative p-4">
        <div className="grid grid-cols-2 grid-rows-1 z-10 h-full items-center">
          <div className="flex w-full">
            <CarouselNavigationLeft />
          </div>
          <div className="flex w-full justify-end">
            <CarouselNavigationRight />
          </div>
        </div>
        <div className="flex w-full z-20 p-4 justify-center">
          <CarouselDots size={props.Data.length} active={activeSlider} />
        </div>
        <CarouselImage source={props.Data[activeSlider].image} />
      </div>
  );
};