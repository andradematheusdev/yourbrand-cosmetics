import {FaCircle, FaRegCircle} from 'react-icons/fa';

interface ICarouselDotsProps{
  size: number;
}

const Dot = () => {
  return(
    <input type="radio" name="dots" className='appearance-none inline-block w-4 h-4 rounded-full border-2 border-white checked:bg-white'  />
  );
}

export default function CarouselDots({size}: ICarouselDotsProps) {
  function sliderNavigation(size: number){
    const dots = [];
    for (let i = 0; i < size; i++) {
      dots.push(<Dot />);
    }
    return dots; 
  }

  return (
    <div className="flex w-full gap-x-1 justify-center">
      {sliderNavigation(size)}
    </div>
  )
}