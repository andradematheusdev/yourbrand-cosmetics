import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const CarouselNavigationLeft = () => {
  return (
    <a role={"button"}>
      <FiChevronLeft color="#fff" size={32} />
    </a>
  );
};

export const CarouselNavigationRight = () => {
  return (
    <a role={"button"}>
      <FiChevronRight color="#fff" size={32} />
    </a>
  );
};
