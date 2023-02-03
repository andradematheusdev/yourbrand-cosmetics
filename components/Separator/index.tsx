interface ISeparatorProps {
  className?: string;
}

export const Separator = ({className}: ISeparatorProps) => {
  return (
    <div className={`inline-block border-l border-neutral-300 mx-4 h-[30px] ${className}`} /> 
  )
}
