import Image from 'next/image';
import { AiFillStar } from "react-icons/ai";
import { Button } from '../';

interface IProductProps{
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
}

export const Product = ({id, image, name, price, rating}: IProductProps) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<AiFillStar color='orange' />);
  }

  while (stars.length < 5) {
    stars.push(<AiFillStar />);
  }
  return (
    <div className='flex flex-col justify-center gap-y-1'>
      <div className='flex justify-center flex-1 md:px-4 lg:px-0'>
        <div className='w-full relative aspect-square'>
          <Image src={image} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
        </div>
      </div>
      <span className='text-center text-base uppercase'>{name}</span>
      <span className='text-base text-center font-bold'>R${parseFloat(price).toFixed(2)}</span>
      <div className='flex w-full justify-center'>        
        {stars}
      </div>
      <Button text='COMPRAR' url={`/product/${id}`} />
    </div>
  )
}
