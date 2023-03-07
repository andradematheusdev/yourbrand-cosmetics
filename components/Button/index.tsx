interface IButtonProps {
  url?: string;
  text: string;
}

export const Button = ({url = "#", text, ...rest}: IButtonProps) => {
  return (
    <button
      className={` flex items-center justify-center border-2 border-black py-3 p-4 font-bold text-sm whitespace-nowrap hover:bg-black hover:text-white transition-colors`}
      {...rest}
    >
      {text}
    </button>
  )
}
