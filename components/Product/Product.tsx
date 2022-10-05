import Image from 'next/image';
import {AiFillStar} from "react-icons/ai";
import Button from '../Button/Button';

export default function Product() {
  return (
    <div className='flex flex-col justify-center gap-y-1'>
      <div className='flex justify-center flex-1 md:px-4 lg:px-0'>
        <div className='w-full relative aspect-square'>
          <Image src={"/images/slider/slide1.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
        </div>
      </div>
      <span className='text-center text-base uppercase'>Nome</span>
      <span className='text-base text-center font-bold'>R$9,90</span>
      <div className='flex w-full justify-center'>
        <AiFillStar color='orange' />
        <AiFillStar color='orange' />
        <AiFillStar color='orange' />
        <AiFillStar />
        <AiFillStar />
      </div>
      <Button text='COMPRAR' />
    </div>
  )
}
