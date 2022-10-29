import classNames from 'classnames';
import { useEffect, useState } from 'react';
import {FaChevronUp} from 'react-icons/fa'

export function ScrollToTop() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <a role={'button'}
      className={classNames('fixed right-8 bottom-16 bg-zinc-100 rounded-full p-3 opacity-20 hover:opacity-100 transition-opacity', {'hidden opacity-0': !scroll})}
      onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'});}}  
    >
      <FaChevronUp size={20} color={'#3f3f46'} />
    </a>
  )
}