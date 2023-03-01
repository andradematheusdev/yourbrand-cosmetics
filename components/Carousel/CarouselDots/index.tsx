import {FaCircle, FaRegCircle} from 'react-icons/fa';

interface ICarouselDotsProps{
  size: number;
  active: number;
}

type DotProps = {
  active: boolean;
}

const Dot = ({active}: DotProps) => {
  return(
    <input
      type="radio"
      name="dots"
      className='appearance-none mx-1 inline-block w-4 h-4 rounded-full border-2 border-white checked:bg-white'
      checked={active}
    />
  );
}

export default function CarouselDots({size, active}: ICarouselDotsProps) {
  function sliderNavigation(size: number){
    const dots = [];
    let isActive = false;
    for (let i = 0; i < size; i++) {
      i === active ? isActive = true : isActive = false;
      dots.push(<Dot active={isActive} />);
    }
    return dots; 
  }

  return (
    <div className="justify-center">
      {sliderNavigation(size)}
    </div>
  )
}