import SliderIndicator from "./SliderIndicator/SliderIndicator";
import SliderNavigation from "./SliderNavigation/SliderNavigation";

export default function Slider() {
  return (
    <div className="flex w-full flex-col h-[500px] max-h-[500px] justify-between items-center py-4 bg-[url(/images/slider/slide1.jpg)] bg-no-repeat bg-center bg-cover">
      <div>
        {/* Heading */}
      </div>
      <div className="w-full">
        <SliderNavigation />
      </div>
      <div>
        <SliderIndicator />
      </div>
    </div>
  )
}