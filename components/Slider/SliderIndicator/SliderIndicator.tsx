import {FaCircle, FaRegCircle} from 'react-icons/fa';

export default function SliderIndicator() {
  return (
    <div className="flex w-full gap-x-1">
      <FaRegCircle color='#fff' size={12} />
      <FaCircle color='#fff' size={12} />
      <FaRegCircle color='#fff' size={12} />
      <FaRegCircle color='#fff' size={12} />
    </div>
  )
}