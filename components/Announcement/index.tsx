import { useState } from 'react';
import classNames from 'classnames';
import { CgClose } from 'react-icons/cg';

interface IAnnouncementProps {
  message: string;
}

export const Announcement = ({message}: IAnnouncementProps) => {
  const [isAnnounceVisible, setIsAnnounceVisible] = useState(true);

  function handleClick(){
    console.log(isAnnounceVisible);    
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
        <a role={'button'} onClick={() => handleClick()}>
          <CgClose size={20} className="leading-none" />
        </a>
      </div>
    </div>
  )
}