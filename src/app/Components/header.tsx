import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <div className="flex flex-col">
      <header className="bg-blue-300 text-black">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">Blog</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
