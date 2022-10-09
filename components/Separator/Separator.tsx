type Props = {
  className?: string;
}

export default function Separator({className}: Props) {
  return (
    <div className={`inline-block border-l border-neutral-300 mx-4 h-[30px] ${className}`} /> 
  )
}
