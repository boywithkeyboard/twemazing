import React from 'react'

const FlagMalta = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CF142B" d="M32 5H18v26h14c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path fill="#EEE" d="M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h14V5H4z"/><path fill="#CF142B" d="M1.654 9.656h8.691v2.688H1.654z"/><path fill="#CF142B" d="M4.656 6.654h2.688v8.691H4.656z"/><g fill="#CF142B"><circle cx="4.71" cy="12.271" r=".921"/><circle cx="7.355" cy="12.271" r=".921"/><circle cx="4.71" cy="9.824" r=".921"/><circle cx="7.355" cy="9.824" r=".921"/></g><g fill="#99AAB5"><circle cx="4.708" cy="12.271" r=".708"/><circle cx="7.355" cy="12.271" r=".708"/><circle cx="4.708" cy="9.824" r=".708"/><circle cx="7.355" cy="9.824" r=".708"/></g><circle fill="#CCD6DD" cx="6.032" cy="11.032" r="1.817"/><path fill="#CCD6DD" d="M5 7h2v8H5z"/><path fill="#CCD6DD" d="M2 10h8v2H2z"/><circle fill="#B2C0C9" cx="6.032" cy="11.083" r="1.204"/><path fill="#99AAB5" d="M6.647 11.023c.015-.017.032-.032.048-.047l.009-.007c.042.021.083.047.123.072.08.049.334-.066.219-.137-.099-.061-.198-.132-.32-.111-.091.016-.169.063-.238.122-.008-.062-.015-.123-.029-.184.019-.02.03-.042.025-.069-.011-.058.021-.122.041-.175.01-.026-.004-.044-.025-.055.009-.012.016-.024.024-.037.035.012.071.023.108.031.063.013.146-.013.195-.052.046-.036.031-.073-.022-.083-.094-.019-.181-.067-.269-.105-.058-.025-.143.001-.194.029-.033.018-.084.066-.031.092-.006.006-.013.22-.016.227-.044.095-.118-.534-.169.466h-.018c-.017 0-.141-.345-.134-.414.074-.015.026-.264.026-.315v-.029c0-.015.113-.025.105-.033.03-.019.117-.045.09-.067-.042-.035-.1-.011-.146.007-.014-.007-.014-.012-.028-.014-.01-.002-.013 0-.023 0 .054-.022.1-.058.086-.099-.008-.025-.014-.045 0-.07.067-.116-.21-.09-.257-.009-.029.051-.035.097-.017.153.012.038.061.051.113.046-.028.015-.053.037-.068.065l-.003.009c-.042 0-.09.013-.119.025-.161.069-.331.119-.482.209-.025.015-.094.063-.031.083.038.012.087.006.131-.007.002.007.002.013.006.019.039.051.096.098.154.126.061.03.142.013.196-.023.036-.023.075-.081.03-.112.017-.025.043-.043.068-.061.003.064.011.127.027.184.004.016.013.028.023.038-.033.006-.065.019-.09.034-.033.02-.072.065-.042.096-.07.013-.139.031-.205.062-.025.011-.08.043-.085.078l-.096.012c-.051.008-.135.032-.153.09-.024.001-.052.006-.072.011-.059.008-.17.034-.175.086-.008.092.038.167.078.245-.037.036-.063.078-.074.132-.024.119.256.077.277-.029.003-.016.005-.032.019-.042.035-.025.07-.074.039-.108.012-.01.02-.018.016-.025-.035-.068-.072-.134-.077-.21.015.006.031.009.047.01.019.102.097.192.171.26.018.016.051.018.087.013-.015.012-.028.025-.034.042-.034.085-.048.173-.059.263-.004.037.024.073.06.082.116.027.209.082.303.154.097.074.339-.062.213-.159-.088-.067-.183-.123-.288-.159.007-.051.016-.102.035-.15.007-.018.009-.034.007-.047.023-.009.045-.019.065-.031.178-.108.396-.131.587-.218-.008.028.009.055.049.064.082.019.231.018.258.112.027.095-.005.209.056.293.056.078.323-.016.256-.109-.023-.032-.019-.095-.021-.133-.003-.059-.006-.121-.034-.175-.057-.108-.242-.116-.346-.141-.036-.008-.076-.055-.114-.043.003-.007-.003-.071-.021-.071h-.006c.001 0 .001.048.002.047.061-.004.12.023.159-.024z"/></svg>
  )
}

export default FlagMalta