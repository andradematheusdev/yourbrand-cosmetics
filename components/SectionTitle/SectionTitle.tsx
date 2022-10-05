type Props = {
  title: string | React.ReactNode;
}

export default function SectionTitle({title}: Props) {
  return (
    <div className="flex items-center gap-x-2 uppercase font-bold">
      <hr className="w-20" />
      <h6>{title}</h6>
    </div>
  )
}
