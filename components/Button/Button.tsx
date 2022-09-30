type Props = {
  url?: string;
  text: string;
  className?: string;
}

export default function Button({url = "#", text, className}: Props) {
  return (
    <a
      href={url}
      role="button"
      className={`
        flex items-center justify-center border-2 border-black py-3 p-4 font-bold text-sm whitespace-nowrap 
        ${className}
      `}
    >
      {text}
    </a>
  )
}
