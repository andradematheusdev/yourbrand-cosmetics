import React from 'react'

type Props = {
  text: string;
}

export default function CustomTag({text}: Props) {
  return (
    <span className='px-2 py-1 bg-neutral-300 uppercase font-bold rounded whitespace-nowrap m-1 text-xs'>
      {text}
    </span>
  )
}
