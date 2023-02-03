import Image from 'next/image';

interface IInstaPicsProps {
  image: string;
}

export const InstaPics = ({image}: IInstaPicsProps) => {
  return (    
        <div className='w-full relative aspect-square'>
          <Image src={image} objectFit={'cover'} layout={'fill'} width={"100%"} height={"100%"} alt={"YouCare Shinnee"} />
        </div>
  )
}
