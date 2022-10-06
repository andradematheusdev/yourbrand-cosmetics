type Props = {
  title: string | React.ReactNode;
  className?: string;
}

export default function SectionTitle({title, className}: Props) {
  return (
    <div className="flex items-center uppercase font-bold">
      <hr className="w-20 mr-2" />
      <h6 className={className}>{title}</h6>
    </div>
  )
}
