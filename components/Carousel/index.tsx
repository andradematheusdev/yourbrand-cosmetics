import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

interface ICarouselData {
  data: {
    id: number;
    image: string;
    title: string;
    caption: string;
  }[];
}

export const CustomCarousel = (props: ICarouselData) => {
  return (
    <Carousel>
      {props.data.map((carousel) => {
        return (
          <Carousel.Item key={carousel.id}>
            <div className="h-[70vh] bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.3)]">
              <Image
                src={carousel.image}
                alt="First slide"
                objectFit="cover"
                layout="fill"
                className="-z-10"
              />
            </div>
            <Carousel.Caption>
              <h3 className="font-bold">{carousel.title}</h3>
              <p>{carousel.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
