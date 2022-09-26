import {HiMenu} from 'react-icons/hi';

export default function MobileNavToggle() {
  return (
    <a role={'button'} className="inline-block md:hidden"><HiMenu size={28} /></a>
  )
}