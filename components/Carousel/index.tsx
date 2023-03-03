import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

export const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="h-[70vh]">
          <Image src="/images/carousel/image1.jpg" alt="First slide" objectFit="cover" layout="fill" />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="h-[70vh]">
          <Image src="/images/carousel/image2.jpg" alt="Second slide" objectFit="cover" layout="fill" />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
