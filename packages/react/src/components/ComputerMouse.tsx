import React from 'react'

const ComputerMouse = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#99AAB5" d="M20 2.047V2c0-1.104-.896-2-2-2s-2 .896-2 2v.047C7.737 2.422 6 5.127 6 7v17c0 6.627 5.373 12 12 12s12-5.373 12-12V7c0-1.873-1.737-4.578-10-4.953z"/><path fill="#292F33" d="M22 9.199v-7c-.622-.066-1.288-.116-2-.151V9c0 1.104-.896 2-2 2s-2-.896-2-2V2.048c-.712.034-1.378.085-2 .151v7C7.459 9.89 6 12.29 6 14v2c0-1.725 1.482-4.153 8.169-4.819C14.646 12.228 16.171 13 18 13c1.83 0 3.355-.772 3.831-1.819C28.518 11.847 30 14.275 30 16v-2c0-1.71-1.459-4.11-8-4.801z"/></svg>
  )
}

export default ComputerMouse