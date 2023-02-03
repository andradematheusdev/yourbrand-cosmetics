import Image from "next/image";

export const Ambassador = () => {
  return (
    <div className='w-32 h-52 relative'>
        <Image src={"/images/products/youcareshinnee.jpg"} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
    </div>
  )
}
