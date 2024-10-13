"use client"

import { Menu } from 'lucide-react'
import { useState } from "react"


export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-[#1e293b] text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
              <img src="https://placehold.co/40x40" alt="Car Garage logo with gear and wrench" className="mr-2" />
              <span className="text-xl font-bold">CAR GARAGE</span>
          </div>
          <nav className="hidden md:flex space-x-6">
              <a href="#Home" className="hover:text-gray-300">HOME</a>
              <a href="#SERVICES" className="hover:text-gray-300">SERVICES</a>
              <a href="#REPAIRS" className="hover:text-gray-300">REPAIRS</a>
              <a href="#ABOUTUS" className="hover:text-gray-300">ABOUT US</a>
              <a href="#CONTACT" className="hover:text-gray-300">CONTACT US</a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu/>
          </button>
      </div>
      {menuOpen && (
          <nav className="md:hidden bg-[#1e293b] text-white px-6 py-4">
              <a href="#HOME" className="block py-2">HOME</a>
              <a href="#SERVICES" className="block py-2">SERVICES</a>
              <a href="#REPAIRS" className="block py-2">REPAIRS</a>
              <a href="#ABOUTUS" className="block py-2">ABOUT US</a>
              <a href="#CONTACT" className="block py-2">CONTACT US</a>
          </nav>
      )}
  </header>
  )
}