import Image from "next/image";

interface ICarouselImageProps{
  source: string;
}

export const CarouselImage = ({source}: ICarouselImageProps) => {
  return (
    <Image src={source} alt="" objectFit={'cover'} layout={'fill'} className="" />
  )
}
