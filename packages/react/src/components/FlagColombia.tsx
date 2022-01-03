import React from 'react'

const FlagColombia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FBD116" d="M32 5H4C1.791 5 0 6.791 0 9v9h36V9c0-2.209-1.791-4-4-4z"/><path fill="#22408C" d="M0 18h36v7H0z"/><path fill="#CE2028" d="M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-2H0v2z"/></svg>
  )
}

export default FlagColombia