import Image from "next/image";
import Data from "../../fakedata/Data";
import CustomTag from "../CustomTag/CustomTag";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";


export default function HomeHightlight() {
  return (
    <>
      <SectionTitle title={Data.homeHighlight.catName} />
        <div className='flex flex-1'>

          <div className='w-1/3'>
            <h1 className='text-5xl uppercase'>
              {Data.homeHighlight.title}
            </h1>
            <span className='block text-justify leading-10'>
              {Data.homeHighlight.text}
            </span>
            <hr className="my-4" />
            <div className="flex w-full">
              <div className="flex-1">
                <CustomTag text="brilho" />
                <CustomTag text="long last" />
                <CustomTag text="silicones puros" />
              </div>
              <div>
                <Button text="QUERO O MEU!" />
              </div>
            </div>
          </div>

          <div className='flex justify-end flex-1 overflow-hidden'>
            <div className='w-[520px] h-[720px] relative '>
              <Image src={"/images/products/youcareshinnee.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
            </div>
          </div>
        </div>
    </>
  )
}
