'use client'

import { useState } from 'react'

export const ScrollToTop = () => {
  const [scrollHeight, setScrollHeight] = useState(0)

  window.onscroll = function () {
    setScrollHeight(document.documentElement.scrollTop)
  }

  return scrollHeight !== 0 ? (
    <div
      className="bg-secondary rounded-full fixed z-20 bottom-0 right-0 p-2 mb-10 mr-10 cursor-pointer hover:bg-secondary/80"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    >
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex items-center justify-center"
      >
        <path
          d="M12 6V18M12 6L7 11M12 6L17 11"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  ) : null
}
