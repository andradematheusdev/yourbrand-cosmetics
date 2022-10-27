import * as RadixPopover from '@radix-ui/react-popover';

export function SearchPopover() {
  return(
    <RadixPopover.Root>
      <RadixPopover.Trigger
        className='border-2 w-16 h-16 rounded-full'
      >
        teste
      </ RadixPopover.Trigger>
      <RadixPopover.Anchor />
      <RadixPopover.Portal>
        <RadixPopover.Content>
          <RadixPopover.Close />
          <RadixPopover.Arrow />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};
