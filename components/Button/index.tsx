interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  url?: string;
  text: string;
  className?: string;
}

export const Button = ({url = "#", text, className, ...rest}: IButtonProps) => {
  return (
    <button
      className={`
      flex items-center justify-center border-2 border-black py-3 p-4 font-bold text-sm whitespace-nowrap
      hover:bg-black hover:text-white transition-colors ${className}
      `}
      {...rest}
    >
      {text}
    </button>
  )
}
