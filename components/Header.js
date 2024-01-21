import Image from "next/image"
import Link from "next/link"
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div className="group">
            <header className="h-[140px] flex w-full px-6 sticky top-0 left-0 right-0" id="headerdiv">
                <nav className="flex justify-between items-center w-full">
                    <div className="logo">
                        <Link href={"/"}><Image src={"/psrlogo.webp"} height={250} width={250} alt="Psr logo" priority /></Link>
                    </div>
                    <div className="nav-items flex flex-col items-center gap-4">
                        <div className="flex justify-end items-center w-full">
                            <div className="flex justify-start items-center gap-8">
                                <Link href={"/"} >Chapter</Link>
                                <Link href={"/"} >Manage My Account</Link>
                                <div className="search"><FaSearch className="text-xl" /></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center gap-4 text-lg font-bold">
                            <Link href={"/issues"} className="group/issues">Issues</Link>
                            <div className="h-8 w-0.5 bg-black"></div>
                            <Link href={"/about"} className="group/about">About</Link>
                            <div className="h-8 w-0.5 bg-black"></div>
                            <Link href={"/"}>Get Involved</Link>
                            <div className="h-8 w-0.5 bg-black"></div>
                            <Link href={"/"}>Support</Link>
                            <div className="h-8 w-0.5 bg-black"></div>
                            <Link href={"/"}>Resources</Link>
                            <button className="w-32 h-10 flex justify-center items-center bg-red-800 text-white rounded-full hover:bg-black hover:text-white">Act Now</button>
                            <button className="w-32 h-10 flex justify-center items-center bg-red-800 text-white rounded-full hover:bg-black hover:text-white">Donate</button>
                        </div>
                    </div>
                </nav>
                {/* <div className='accessibility-menu'></div> */}
                {/* <div className="mx-auto flex h-screen w-full items-center justify-center bg-gray-200 py-20"> */}
                {/* <div className="group relative cursor-pointer py-2">
                    <div className="flex items-center justify-between space-x-5 bg-white px-4">
                        <a
                            className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
                            onClick=""
                        >
                            Our Products
                        </a>
                    </div>
                    <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible" onClick="">
                        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Product One</a>
                        <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Product Two</a>
                    </div>
                </div> */}
                {/* </div> */}
            </header>
            {/* <span className="text-red-500 group-hover/issues:text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, temporibus? Sunt, magni quo modi consectetur soluta blanditiis maiores numquam delectus cumque impedit, nihil placeat a iste tempora eaque nemo pariatur.
            </span>
            <span className="text-blue-500 invisible group-hover/about:visible">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, temporibus? Sunt, magni quo modi consectetur soluta blanditiis maiores numquam delectus cumque impedit, nihil placeat a iste tempora eaque nemo pariatur.
            </span> */}
        </div>
    )
}

export default Header