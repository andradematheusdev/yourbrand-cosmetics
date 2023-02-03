interface ICustomTagProps {
  text: string;
}

export const CustomTag = ({text}: ICustomTagProps) => {
  return (
    <span className='px-2 py-1 bg-neutral-300 uppercase font-bold rounded whitespace-nowrap m-1 text-xs text-center'>
      {text}
    </span>
  )
}
