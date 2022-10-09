type Props = {
  title: string | React.ReactNode;
  className?: string;
  responsive?: boolean;
}

export default function SectionTitle({title, className, responsive = false}: Props) {
  return (
    <div className="flex items-center uppercase font-bold mb-2">
      {!responsive && <hr className="w-20 mr-2" />}
      {responsive && <hr className="w-20 mr-2 hidden md:inline" />}
      <h6 className={className}>{title}</h6>
    </div>
  )
}
