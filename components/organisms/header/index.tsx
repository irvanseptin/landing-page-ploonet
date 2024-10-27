import React, { useState } from 'react'

import Button from '@/components/atoms/button'
import Menu from '@/components/molecules/menu'

import IconLogo from '@/public/icons/logo.svg'
import Language from '@/public/icons/language.svg'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-black text-white h-[100px]">
        <div className="container mx-auto w-full md:w-[1610px] h-full flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center justify-start py-2">
            <div className="text-2xl font-bold">
              <IconLogo />
            </div>
          </div>

          {/* Center Menus - Visible on Desktop */}
          <Menu menus={[
            { label: '스튜디오', target: '#' },
            { label: '워크센터', target: '#' },
            { label: '손비서', target: '#' },
            { label: '메타휴먼', target: '#' },
            { label: '영상제작소', target: '#' },
            { label: '공지사항', target: '#' },
            { label: '제휴문의', target: '#' },
          ]} />

          {/* Right Side Menus - Visible on Desktop */}
          <div className="hidden md:flex items-center justify-end py-2 gap-4">
            <Button color="white" variant="text">로그인</Button>
            <a href="#" className="text-gray-400 hover:text-white active:text-white">
              <Language />
            </a>
          </div>

          {/* Burger Menu for Mobile */}
          <button className="block md:hidden" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#141414] text-white transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <Menu isVertical menus={[
          { label: '스튜디오', target: '#' },
          { label: '워크센터', target: '#' },
          { label: '손비서', target: '#' },
          { label: '메타휴먼', target: '#' },
          { label: '영상제작소', target: '#' },
          { label: '공지사항', target: '#' },
          { label: '제휴문의', target: '#' },
        ]} />
        {/* <nav className="flex flex-col items-start p-4 gap-4">
          <Button variant="text">로그인</Button>
          <a href="#" className="text-gray-400 hover:text-white active:text-white">로그인</a>
          <a href="#" className="text-gray-400 hover:text-white active:text-white">
            <Language />
          </a>
        </nav> */}
      </div>
    </>
  )
}

export default Header
