import CarouselDots from "./CarouselDots";
import CarouselImage from "./CarouselImage";
import CarouselNavigation from "./CarouselNavigation";

interface IData {
  Data: {
    id: number;
    image: string;
  }[]
}

export const Carousel = (props: IData) => {
  return (
    <div className={`flex w-full flex-col h-[600px] max-h-[600px] justify-between items-center relative`}>
      <div>
        {/* Heading */}
      </div>
      <div className="w-full h-full">
        <div className="relative top-0 right-0 bottom-0 left-0 w-full h-full">
          <CarouselImage source={props.Data[0].image} />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full">
          <CarouselNavigation />
        </div>
        <div className="absolute bottom-0 w-full" >
          <CarouselDots />
        </div>
      </div>
    </div>
  )
}