import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

export const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="h-64">
          <Image src="/images/carousel/image1.jpg" alt="First slide" layout="fill" objectFit="cover" />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="h-64">
          <Image src="/images/carousel/image2.jpg" alt="Second slide" layout="fill" objectFit="cover" />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
