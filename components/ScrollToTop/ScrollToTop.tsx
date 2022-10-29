import {FaChevronUp} from 'react-icons/fa'

export function ScrollToTop() {
  return (
    <a role={'button'}
      className="fixed right-8 bottom-16 bg-zinc-100 rounded-full p-3 opacity-20 hover:opacity-100 transition-opacity"
      onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'});}}  
    >
      <FaChevronUp size={20} color={'#3f3f46'} />
    </a>
  )
}