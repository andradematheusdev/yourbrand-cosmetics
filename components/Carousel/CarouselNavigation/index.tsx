import { useContext } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Context } from "../../../contexts/CarouselContext";

interface INavigationProps {
  dataSize: number;
};

export const CarouselNavigationLeft = ({dataSize}: INavigationProps) => {
  const {activeSlider, setActiveSlider} = useContext(Context);
  function handleClick(){   
    activeSlider <= 0 ? setActiveSlider(dataSize - 1) : setActiveSlider(activeSlider - 1);  
  }
  return (
    <a role={"button"} onClick={() => {handleClick()}}>
      <FiChevronLeft color="#fff" size={32} />
    </a>
  );
};

export const CarouselNavigationRight = ({dataSize}: INavigationProps) => {
  const {activeSlider, setActiveSlider} = useContext(Context);
  function handleClick(){ 
    console.log(activeSlider, dataSize); 
    activeSlider >= (dataSize - 1) ? setActiveSlider(0) : setActiveSlider(activeSlider + 1);   
    console.log(activeSlider, dataSize); 
  }
  return (
    <a role={"button"} onClick={() => {handleClick()}}>
      <FiChevronRight color="#fff" size={32} />
    </a>
  );
};
