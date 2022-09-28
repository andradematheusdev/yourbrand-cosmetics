type Props = {
  url?: string;
  text: string;
}

export default function Button({url = "#", text}: Props) {
  return (
    <a href={url} role="button" className="border-2 border-black py-3 p-4 font-bold text-sm">{text}</a>
  )
}
