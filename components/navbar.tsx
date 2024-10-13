"use client"
import {
  NavigationMenu,
  NavigationMenuList
} from "./ui/navigation-menu"
import { Dialog, DialogClose } from "@radix-ui/react-dialog"
import { BookOpen, Menu } from 'lucide-react'
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi"
import { Button } from "./ui/button"
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import ModeToggle from "./mode-toggle"
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
    // <div className="flex items-center min-w-full w-full justify-center p-2 z-99">
    //   <div className="flex min-h-[60px] justify-between md:w-[620px] w-[95%] mt-[1rem] border border-gray-350 dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-opacity-20 rounded-xl p-2 shadow-lg">
    //     <Dialog>
    //       <SheetTrigger className="min-[825px]:hidden p-2 transition">
    //         <GiHamburgerMenu />
    //       </SheetTrigger>
    //       <SheetContent side="left">
    //         <SheetHeader>
    //           <SheetTitle>tsafi</SheetTitle>
    //           <SheetDescription>
    //             Launch your blog with tsafi in just a few clicks
    //           </SheetDescription>
    //         </SheetHeader>
    //         <div className="flex flex-col space-y-3 mt-[1rem]">
    //           <DialogClose asChild>
    //             <Link href="/">
    //               <Button variant="outline" className="w-full">Home</Button>
    //             </Link>
    //           </DialogClose>
    //           <DialogClose asChild>
    //             <Link href="/cms">
    //               <Button variant="outline" className="w-full">Dashboard</Button>
    //             </Link>
    //           </DialogClose>
    //         </div>
    //       </SheetContent>
    //     </Dialog>
    //     <NavigationMenu>
    //       <NavigationMenuList className="max-[825px]:hidden ">
    //         <Link href="/" className="pl-2">
    //           <BookOpen />
    //         </Link>
    //       </NavigationMenuList>
    //     </NavigationMenu>
    //     <div className="flex items-center gap-2">
    //       <NavigationMenu>
    //         <NavigationMenuList className="max-[825px]:hidden ">
    //           <Link href="/components" className="pl-2">
    //             <Button variant="ghost">
    //               About Us
    //             </Button>
    //           </Link>
    //         </NavigationMenuList>
    //         <NavigationMenuList className="max-[825px]:hidden ">
    //           <Link href="/components" className="pl-2">
    //             <Button variant="ghost">
    //               Contact Us
    //             </Button>
    //           </Link>
    //         </NavigationMenuList>
    //       </NavigationMenu>
    //       <ModeToggle />
    //     </div>
    //   </div>
    // </div>
  )
}