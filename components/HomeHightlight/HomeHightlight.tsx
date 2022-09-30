import Image from "next/image";
import Data from "../../fakedata/Data";
import CustomTag from "../CustomTag/CustomTag";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";


export default function HomeHightlight() {
  return (
    <div className="px-8">
      <SectionTitle title={Data.homeHighlight.catName} />
        <div className='flex flex-1 flex-col sm:flex-row'>

          <div className='w-full md:w-1/2 md:px-4 lg:w-2/5 lg:px-0'>
            <h1 className='text-5xl uppercase'>
              {Data.homeHighlight.title}
            </h1>
            <span className='block text-justify leading-10'>
              {Data.homeHighlight.text}
            </span>
            <hr className="my-4" />
            <div className="flex w-full items-center flex-wrap gap-x-2 gap-y-4 mb-4">
              <div className="flex-1">
                <CustomTag text="brilho" />
                <CustomTag text="long last" />
                <CustomTag text="silicones puros" />
              </div>
              <div className="flex-1">
                <Button text="QUERO O MEU!" className="w-full"/>
              </div>
            </div>
          </div>

          <div className='flex justify-end flex-1 overflow-hidden md:px-4 lg:px-0'>
            <div className='w-[520px] h-[720px] relative '>
              <Image src={"/images/products/youcareshinnee.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
            </div>
          </div>
        </div>
    </div>
  )
}
