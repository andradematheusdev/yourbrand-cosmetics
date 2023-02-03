import * as RadixPopover from '@radix-ui/react-popover';
import { CgSearch } from 'react-icons/cg';
import { FiArrowRight } from 'react-icons/fi';

export const SearchPopover = () => {
  return(
    <RadixPopover.Root>
      <RadixPopover.Trigger className='flex items-center justify-center'>
        <CgSearch size={22} />
      </ RadixPopover.Trigger>
      <RadixPopover.Anchor />
      <RadixPopover.Portal>
        <RadixPopover.Content>
          <RadixPopover.Close />
          <div className='flex items-center justify-center p-2 rounded w-96 border border-zinc-300 bg-zinc-50 shadow-sm'>            
            <input
              type="text"
              name=""
              id=""
              className='focus:outline-none bg-transparent w-full'
              placeholder='Procurar na loja...'
            />
            <a role={'button'}>
              <FiArrowRight size={20} />
            </a>
          </div>
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};
