type Props = {
  title: string | React.ReactNode;
  className?: string;
}

export default function SectionTitle({title, className}: Props) {
  return (
    <div className="flex items-center gap-x-2 uppercase font-bold">
      <hr className="w-20" />
      <h6 className={className}>{title}</h6>
    </div>
  )
}
