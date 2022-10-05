import Image from 'next/image';

export default function InstaPics() {
  return (
    <div className='grid w-full grid-cols-2 grid-rows-4 md:grid-rows-2 md:grid-cols-4'>
        <div className='w-full relative aspect-square'>
          <Image src={"/images/slider/slide1.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
        </div>
        <div className='w-full relative aspect-square'>
          <Image src={"/images/slider/slide1.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
        </div>
        <div className='w-full relative aspect-square'>
          <Image src={"/images/slider/slide1.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
        </div>
        <div className='w-full relative aspect-square'>
          <Image src={"/images/slider/slide1.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
        </div>
        <div className='w-full relative aspect-square'>
          <Image src={"/images/slider/slide1.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
        </div>
        <div className='w-full relative aspect-square'>
          <Image src={"/images/slider/slide1.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
        </div>
        <div className='w-full relative aspect-square'>
          <Image src={"/images/slider/slide1.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
        </div>
        <div className='w-full relative aspect-square'>
          <Image src={"/images/slider/slide1.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
        </div>
      </div>
  )
}
