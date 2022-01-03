import React from 'react'

const WomanMediumLightSkinToneBeard = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFE51E" d="M18 3c6 0 16 3 16 16s0 16-3 16-7-3-13-3-9.915 3-13 3c-3.343 0-3-12-3-16C2 6 12 3 18 3z"/><path fill="#F3D2A2" d="M6 18.562c0-8.526 5.373-15.438 12-15.438s12 6.912 12 15.438S24.627 34 18 34 6 27.088 6 18.562z"/><path fill="#C1694F" d="M19 25h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z"/><path fill="#FFE51E" d="M3.064 24c-.03-.325-.064-.647-.064-1 0-5 3 .562 3-3 0-3.563 2-4 4-6l3-3s5 3 9 3 8 2 8 6 3-2 3 3c0 .355-.033.673-.058 1h1.049C34 22.523 34 20.868 34 19 34 6 24 1 18 1S2 6 2 19c0 1.158-.028 2.986.012 5h1.052z"/><path fill="#662113" d="M13 22c-.552 0-1-.447-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .553-.447 1-1 1z"/><path fill="#F9CA55" d="M28.257 26.577c-.005-.013 0 0 0-.013L25 27.5H11l-3.257-.936c0 .013.005.001 0 .013-.474 1.289 1.266 3.473 1.266 3.473.728 1.936 1.499 2.431 2.455 3.091l1.658-.483h9.756l1.658.483c.956-.66 1.727-1.155 2.455-3.091 0 0 1.741-2.184 1.266-3.473z"/><path fill="#FFE51E" d="M25.875 24.767c-.875.931-2.625 2.793-4.375 1.862-2.475-1.316-3.5-.931-3.5-.931s-1.025-.385-3.5.931c-1.75.931-3.5-.931-4.375-1.862-.619-.658-2.625-1.862-2.625 0 0 2.792 1.75 4.654 1.75 4.654 1.75 4.654 5.25 4.654 5.25 4.654.875.931 6.125.931 7 0 0 0 3.5 0 5.25-4.654 0 0 1.75-1.862 1.75-4.654 0-1.862-2.006-.658-2.625 0z"/><path fill="#F3D2A2" d="M18 29.65c-3.368 0-5.893-1.784 0-1.784s3.368 1.784 0 1.784"/></svg>
  )
}

export default WomanMediumLightSkinToneBeard