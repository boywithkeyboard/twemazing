import React from 'react'

const AntennaBars = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M0 4c0-4 4-4 4-4h28s4 0 4 4v28s0 4-4 4H4s-4 0-4-4V4z"/><path fill="#FFF" d="M28 8h4v20h-4zm-6 4h4v16h-4zm-6 4h4v12h-4zm-6 4h4v8h-4zm-6 4h4v4H4z"/></svg>
  )
}

export default AntennaBars