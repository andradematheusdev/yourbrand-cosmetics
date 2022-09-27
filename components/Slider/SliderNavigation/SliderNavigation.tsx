import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

export default function SliderNavigation() {
  return (
    <div className="flex w-full justify-between">
      <a role={'button'} className="bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.2)] py-6 px-1">
        <FiChevronLeft color='#fff' size={32} />
      </a>
      <a role={'button'} className="bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.2)]  py-6 px-1">
        <FiChevronRight color='#fff' size={32} />
      </a>
    </div>
  )
}