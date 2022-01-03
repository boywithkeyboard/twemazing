import React from 'react'

const FlagTanzania = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#1EB53A" d="M4 5C1.791 5 0 6.791 0 9v15.627L26.456 5H4z"/><path fill="#00A3DD" d="M32 31c2.209 0 4-1.791 4-4V11.33L9.479 31H32z"/><path fill="#141414" d="M32 5h-2.532L0 26.638V27c0 2.209 1.791 4 4 4h2.467L36 9.318V9c0-2.209-1.791-4-4-4z"/><path fill="#FBD035" d="M26.456 5L0 24.627v2.011L29.468 5zM9.479 31L36 11.33V9.318L6.467 31z"/></svg>
  )
}

export default FlagTanzania