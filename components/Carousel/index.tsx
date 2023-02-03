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
  return (
    <div className="flex w-full flex-col h-[600px] max-h-[600px] justify-center relative">
      <CarouselImage source={props.Data[1].image} />
      <div className="grid grid-cols-2 grid-rows-1 z-10">
        <div className="flex w-full">
          <CarouselNavigationLeft />
        </div>
        <div className="flex w-full justify-end">
          <CarouselNavigationRight />
        </div>
      </div>
      {/* <CarouselDots /> */}
    </div>
  );
};