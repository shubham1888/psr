'use client'
import Image from "next/image"
import Link from "next/link"
import { FaSearch } from "react-icons/fa";
import React from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Header = () => {
    const sidebarref = React.useRef(null)
    const toggleSideBarFunc = () => {
        if (sidebarref.current.classList.contains("translate-x-full")) {
            sidebarref.current.classList.remove("translate-x-full")
            sidebarref.current.classList.add("translate-x-0")
        }
        else {
            sidebarref.current.classList.remove("translate-x-0")
            sidebarref.current.classList.add("translate-x-full")
        }
    }
    return (
        <div className="group">
            <header className="h-[140px] flex w-full px-6 sticky top-0 left-0 right-0" id="headerdiv">
                <nav className="flex justify-between items-center w-full">
                    <div className="logo">
                        <Link href={"/"}><Image src={"/psrlogo.webp"} height={250} width={250} alt="Psr logo" priority /></Link>
                    </div>
                    <div className="nav-items lg:flex flex-col items-center gap-4 hidden">
                        <div className="flex justify-end items-center w-full">
                            <div className="flex justify-start items-center gap-8">
                                <Link href={"/"} >Chapter</Link>
                                <Link href={"/"} >Manage My Account</Link>
                                <div className="search"><FaSearch className="text-xl" /></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-4 text-base font-bold">
                            <Link href={"/issues"} className="group/issues">Issues</Link>
                            <div className="h-8 w-0.5 bg-black"></div>
                            <Link href={"/about"} className="group/about">About</Link>
                            <div className="h-8 w-0.5 bg-black"></div>
                            <Link href={"/"}>Get Involved</Link>
                            <div className="h-8 w-0.5 bg-black"></div>
                            <Link href={"/"}>Support</Link>
                            <div className="h-8 w-0.5 bg-black"></div>
                            <Link href={"/"}>Resources</Link>
                            <div className="h-8 w-0.5 bg-black"></div>
                            <Link href={"/presidentsnote"}>President's Note</Link>
                            <div className="h-8 w-0.5 bg-black"></div>
                            <Link href={"/committee"}>Committee</Link>
                            <button className="w-32 h-10 flex justify-center items-center bg-red-800 text-white rounded-full hover:bg-black hover:text-white">Act Now</button>
                            <button className="w-32 h-10 flex justify-center items-center bg-red-800 text-white rounded-full hover:bg-black hover:text-white">Donate</button>
                        </div>
                    </div>
                    <FaBars onClick={toggleSideBarFunc} className="text-3xl mx-4" />
                </nav>
            </header>
            <div ref={sidebarref} className='min-h-screen py-20 z-50 w-80 bg-slate-500 absolute top-0 right-0 transition-transform transform translate-x-full'>
                <div onClick={toggleSideBarFunc}><IoMdCloseCircle className="text-3xl absolute top-12 right-10" /></div>
                <div className="flex flex-col justify-between items-center gap-4 text-base font-bold py-10">
                    <Link href={"/issues"} className="group/issues">Issues</Link>
                    <Link href={"/about"} className="group/about">About</Link>
                    <Link href={"/"}>Get Involved</Link>
                    <Link href={"/"}>Support</Link>
                    <Link href={"/"}>Resources</Link>
                    <Link href={"/presidentsnote"}>President's Note</Link>
                    <Link href={"/committee"}>Committee</Link>
                    <button className="w-32 h-10 flex justify-center items-center bg-red-800 text-white rounded-full hover:bg-black hover:text-white">Act Now</button>
                    <button className="w-32 h-10 flex justify-center items-center bg-red-800 text-white rounded-full hover:bg-black hover:text-white">Donate</button>
                </div>
            </div>
        </div>
    )
}

export default Header