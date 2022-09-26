import classNames from 'classnames';
import { useState } from 'react';
import {CgClose} from 'react-icons/cg';

type Props = {
  message: string;
}

export default function Announcement({message}: Props) {
  const [isAnnounceVisible, setIsAnnounceVisible] = useState(true);

  function handleClick(){
    setIsAnnounceVisible(!isAnnounceVisible);
  }

  return (
    <div
    className={classNames(
      "flex w-full h-10 items-center justify-center bg-neutral-800 text-white text-xs px-4 transition-all overflow-hidden",
      {"h-0": !isAnnounceVisible}
      )}>
      <div className='flex-1 text-center'>
        <span className='-mr-6'>{message}</span>
      </div>
      <div>
        <a role={'button'} onClick={handleClick}>
          <CgClose size={20} className="leading-none" />
        </a>
      </div>
    </div>
  )
}