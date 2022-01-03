import React from 'react'

const ThreeThirty = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#99AAB5" cx="18" cy="18" r="18"/><circle fill="#E1E8ED" cx="18" cy="18" r="14"/><path fill="#67757F" d="M18 31c-.552 0-1-.447-1-1V18c0-.552.448-1 1-1 .553 0 1 .448 1 1v12c0 .553-.447 1-1 1z"/><path fill="#67757F" d="M27 19h-9c-.552 0-1-.447-1-1 0-.552.448-1 1-1h9c.553 0 1 .448 1 1 0 .553-.447 1-1 1z"/></svg>
  )
}

export default ThreeThirty