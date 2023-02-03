import {FaCircle, FaRegCircle} from 'react-icons/fa';

export default function CarouselDots() {
  return (
    <div className="flex w-full gap-x-1 justify-center pb-4">
      <FaRegCircle color='#fff' size={12} />
      <FaCircle color='#fff' size={12} />
      <FaRegCircle color='#fff' size={12} />
      <FaRegCircle color='#fff' size={12} />
    </div>
  )
}