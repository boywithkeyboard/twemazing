import React from 'react'

const BellhopBell = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#F4900C" d="M15 26h6v4h-6z"/><path fill="#FFAC33" d="M30 18c0 7 3 4 3 7 0 0 0 2-2 2H5c-2 0-2-2-2-2 0-3 3 0 3-7 0-5.523 6.477-8 12-8s12 2.477 12 8z"/><circle fill="#FFAC33" cx="18" cy="10" r="3"/><path fill="#C1694F" d="M35 33c0 1.104-.896 2-2 2H3c-1.104 0-2-.896-2-2s.896-2 2-2h30c1.104 0 2 .896 2 2z"/><path fill="#C1694F" d="M33 31c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2s.896-2 2-2h26c1.104 0 2 .896 2 2z"/></svg>
  )
}

export default BellhopBell