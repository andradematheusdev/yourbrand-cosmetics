import Image from "next/image";

export default function Ambassador() {
  return (
    <div className='flex justify-end flex-1 md:px-4 lg:px-0'>
      <div className='w-36 h-60 relative'>
        <Image src={"/images/products/youcareshinnee.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
      </div>
    </div>
  )
}
