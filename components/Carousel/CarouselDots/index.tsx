interface ICarouselDotsProps{
  size: number;
  active: number;
  changeSlider: Function;
}

interface DotProps {
  active: boolean;
  inputId: number;
  changeSlider: Function;
}

const Dot = ({active, changeSlider, inputId}: DotProps) => {  
  return(
    <input
      type="radio"
      name="dots"
      className='appearance-none mx-1 inline-block w-4 h-4 rounded-full border-2 border-white checked:bg-white'
      checked={active}
      onClick={() => changeSlider(inputId)} 
    />
  );
}

export const CarouselDots = ({size, active, changeSlider}: ICarouselDotsProps) => {
  function sliderNavigation(size: number){
    const dots = [];
    let isActive;
    for (let i = 0; i < size; i++) {
      i === active ? isActive = true : isActive = false;
      dots.push(<Dot active={isActive} inputId={i} changeSlider={changeSlider} />);
    }
    return dots; 
  }

  return (
    <div className="justify-center">
      {sliderNavigation(size)}
    </div>
  )
}