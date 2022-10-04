import Image from 'next/image';
import {AiFillStar} from "react-icons/ai";

export default function Product() {
  return (
    <div className='flex flex-1 flex-col'>
      <div className='flex justify-end flex-1 md:px-4 lg:px-0'>
        <div className='w-[100px] h-[100px] relative '>
          <Image src={"/images/slider/slide1.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
        </div>
      </div>
      <h6>Nome</h6>
      <div className='flex w-full'>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
    </div>
  )
}
