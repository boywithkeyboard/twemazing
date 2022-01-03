import React from 'react'

const FaceWithMonocle = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCB4C" d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><ellipse fill="#65471B" cx="12.176" cy="14.71" rx="2.647" ry="3.706"/><circle fill="#F4F7F9" cx="24.882" cy="14.294" r="6.882"/><path fill="#65471B" d="M14.825 9.946c-.322 0-.64-.146-.848-.423-.991-1.321-2.028-2.029-3.083-2.104-1.39-.095-2.523.947-2.734 1.158-.414.414-1.084.414-1.497 0-.414-.414-.414-1.084 0-1.497.457-.457 2.129-1.936 4.381-1.773 1.695.12 3.251 1.111 4.627 2.945.351.468.256 1.132-.211 1.482-.192.143-.415.212-.635.212z"/><path fill="#292F33" d="M32.824 36c-.585 0-1.059-.474-1.059-1.059V14.824c0-.585.474-1.059 1.059-1.059s1.059.474 1.059 1.059v20.118c-.001.584-.474 1.058-1.059 1.058z"/><path fill="#67757F" d="M32.824 12.706c-.054 0-.105.012-.158.016-.732-3.628-3.943-6.369-7.784-6.369-4.379 0-7.941 3.562-7.941 7.941s3.562 7.941 7.941 7.941c3.468 0 6.416-2.238 7.496-5.343.144.031.292.049.445.049 1.17 0 2.118-.948 2.118-2.118 0-1.169-.948-2.117-2.117-2.117zm-7.942 7.412c-3.211 0-5.823-2.612-5.823-5.824s2.613-5.824 5.823-5.824c3.211 0 5.824 2.612 5.824 5.824s-2.613 5.824-5.824 5.824z"/><path fill="#65471B" d="M21.175 28.588c-.159 0-.321-.036-.473-.112-1.819-.91-3.587-.91-5.406 0-.524.261-1.16.05-1.421-.474-.262-.523-.05-1.159.474-1.421 2.421-1.21 4.877-1.21 7.3 0 .523.262.735.898.474 1.421-.185.372-.559.586-.948.586z"/><path d="M28.049 9.411c-.912-.593-1.998-.94-3.167-.94-3.216 0-5.824 2.607-5.824 5.824 0 1.169.348 2.255.94 3.167l8.051-8.051zm-5.652 10.144c.755.357 1.595.563 2.485.563 3.216 0 5.824-2.607 5.824-5.824 0-.89-.206-1.731-.563-2.485l-7.746 7.746z" fill="#BDDDF4"/></svg>
  )
}

export default FaceWithMonocle