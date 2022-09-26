import {CgClose} from 'react-icons/cg';

type Props = {
  message: string;
}

export default function Announcement({message}: Props) {
  return (
    <div
      className="flex w-full h-10 items-center justify-center bg-neutral-800 text-white text-xs px-4"
    >
      <div className='flex-1 text-center'>
        <span className='-mr-6'>{message}</span>
      </div>
      <div><a role={'button'}><CgClose size={20} className="leading-none" /></a></div>
    </div>
  )
}