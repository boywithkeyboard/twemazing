import React from 'react'

const BlackNib = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#99AAB5" d="M31.986 32.729c-.292.167-.626.271-.987.271-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2c0 .361-.104.695-.271.987l3.146 3.146L34.999 28l-9-7-5 5 7 9 7.134.876-3.147-3.147z"/><path fill="#66757F" d="M13.643 5.308c1.151 1.151 1.151 3.016 0 4.167l-4.167 4.168c-1.151 1.15-3.018 1.15-4.167 0L1.141 9.475c-1.15-1.151-1.15-3.016 0-4.167l4.167-4.167c1.15-1.151 3.016-1.151 4.167 0l4.168 4.167z"/><path fill="#31373D" d="M26.643 18.309L9.44 1.105 1.107 9.44l17.202 17.202c1.15 1.15 3.016 1.15 4.168 0l4.166-4.168c1.15-1.15 1.15-3.015 0-4.165z"/><path fill="#66757F" d="M8.225 16.56l8.334-8.335 2.124 2.125-8.333 8.334z"/></svg>
  )
}

export default BlackNib