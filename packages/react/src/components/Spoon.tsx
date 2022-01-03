import React from 'react'

const Spoon = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#99AAB5" d="M24 10c0-4.971-2.91-10-6.5-10S11 5.029 11 10c0 3.744 1.651 6.385 4 7.461V33.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5V17.461c2.349-1.076 4-3.717 4-7.461z"/></svg>
  )
}

export default Spoon