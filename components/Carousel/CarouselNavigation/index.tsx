import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const CarouselNavigationLeft = () => {
  return (
    <a role={"button"} className="w-10 py-6 px-1 bg-neutral-900 bg-opacity-80 hover:bg-opacity-90">
      <FiChevronLeft color="#fff" size={32} />
    </a>
  );
};

export const CarouselNavigationRight = () => {
  return (
    <a role={"button"} className="w-10 py-6 px-1 bg-neutral-900 bg-opacity-80 hover:bg-opacity-90">
      <FiChevronRight color="#fff" size={32} />
    </a>
  );
};
