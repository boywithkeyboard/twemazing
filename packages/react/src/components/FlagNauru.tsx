import React from 'react'

const FlagNauru = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#002B7F" d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z"/><path fill="#FFC61E" d="M0 17h36v2H0z"/><path fill="#FFF" d="M9.979 19.479l.492 1.965 1.409-1.456-.556 1.949 1.949-.557-1.457 1.409 1.966.492-1.966.492 1.457 1.41-1.949-.557.556 1.949-1.409-1.457-.492 1.966-.492-1.966-1.409 1.457.556-1.949-1.948.557 1.456-1.41-1.966-.492 1.966-.492-1.456-1.409 1.948.557-.556-1.949 1.409 1.456z"/></svg>
  )
}

export default FlagNauru