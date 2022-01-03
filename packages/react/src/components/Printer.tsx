import React from 'react'

const Printer = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#67757F" d="M30 12H6V5c0-1.105.826-2 1.846-2h20.309C29.173 3 30 3.895 30 5v7zm0 19c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2v-3h24v3z"/><path fill="#E1E8ED" d="M27 12H9V2c0-1.105.896-2 2-2h14c1.104 0 2 .896 2 2v10z"/><path fill="#5DADEC" d="M34 25c0 1-1 3-3 3H5c-2 0-3-2-3-3v-9c0-2.209 1.791-4 4-4h24c2.209 0 4 1.791 4 4v9z"/><path fill="#292F33" d="M30 25c0-1.104-.978-2-2.182-2H8.182C6.977 23 6 23.896 6 25v4h24v-4z"/><path fill="#4289C1" d="M30 15c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2v-4h24v4z"/><path fill="#E1E8ED" d="M27 34c0 1.104-.896 2-2 2H11c-1.104 0-2-.896-2-2v-8h18v8z"/><path fill="#9AAAB4" d="M25 29c0 .553-.447 1-1 1H12c-.552 0-1-.447-1-1 0-.553.448-1 1-1h12c.553 0 1 .447 1 1z"/><circle fill="#F5F8FA" cx="30.5" cy="19.5" r="1.5"/><path fill="#9AAAB4" d="M25 32c0 .553-.447 1-1 1H12c-.552 0-1-.447-1-1 0-.553.448-1 1-1h12c.553 0 1 .447 1 1zM9 25h18v2H9z"/></svg>
  )
}

export default Printer