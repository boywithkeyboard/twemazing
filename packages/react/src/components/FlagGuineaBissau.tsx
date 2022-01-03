import React from 'react'

const FlagGuineaBissau = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FCD116" d="M32 5H15v13h21V9c0-2.209-1.791-4-4-4z"/><path fill="#009E49" d="M15 31h17c2.209 0 4-1.791 4-4v-9H15v13z"/><path fill="#CE1126" d="M15 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h11V5zm-5 17l-2.547-1.851L4.906 22l.973-2.994-2.547-1.851H6.48l.973-2.994.973 2.994h3.148l-2.547 1.851L10 22z"/><path d="M8.426 17.155l-.973-2.994-.973 2.994H3.332l2.547 1.851L4.906 22l2.547-1.851L10 22l-.973-2.994 2.547-1.851z"/></svg>
  )
}

export default FlagGuineaBissau