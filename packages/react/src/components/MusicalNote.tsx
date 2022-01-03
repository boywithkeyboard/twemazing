import React from 'react'

const MusicalNote = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#5DADEC" d="M34.209.206L11.791 2.793C10.806 2.907 10 3.811 10 4.803v18.782C9.09 23.214 8.075 23 7 23c-3.865 0-7 2.685-7 6 0 3.314 3.135 6 7 6s7-2.686 7-6V10.539l18-2.077v13.124c-.91-.372-1.925-.586-3-.586-3.865 0-7 2.685-7 6 0 3.314 3.135 6 7 6s7-2.686 7-6V1.803c0-.992-.806-1.71-1.791-1.597z"/></svg>
  )
}

export default MusicalNote