import Image from "next/image"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
    return (
        <footer className='h-[200px] bg-black text-white flex justify-between items-center px-16'>
            <div className="left">
                <div className="logo w-[40%]">
                    <Image src={"/psrimg.webp"} height={150} width={150} alt="PSR" />
                </div>
                <div className="copyright mt-8 text-xs text-gray-400">© 2024 Physicians for Social Responsibility,<br /> All Rights Reserved.</div>
            </div>
            <div className="bg-gray-400 h-[100px] w-0.5"></div>
            <div className="right flex justify-between items-center w-[60%]">
                <div className="w-[50%] text-gray-200">
                    <p className="font-bold">Physicians for Social Responsibility</p>
                    <p>1111 14th St NW Suite 700, Washington, DC 20005</p>
                    <p>Phone: 202.667.4260 | Fax: 202.667.4201 | Email: psrnatl@psr.org</p>
                    <br />
                    <p><spam className="font-bold">Tax ID:</spam> 23-7059731</p>
                </div>
                <div className="flex justify-between items-center gap-2 text-3xl">
                    <div className="flex-row gap-4">
                        <FaFacebookF className="w-fit h-fit rounded-full bg-white text-black p-2" />
                        <div className="flex justify-between items-center">
                            <FaTwitter className="w-fit h-fit rounded-full bg-white text-black p-2" /><p className="hover:text-red-500 text-sm">PSR <br />ENVIRONMENT</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <FaTwitter className="w-fit h-fit rounded-full bg-white text-black p-2" /><p className="hover:text-red-500 text-sm">PSR <br />NUCLEAR</p>
                        </div>
                    </div>
                    <div className="flex-row gap-4">
                        <FaInstagram className="w-fit h-fit rounded-full bg-white text-black p-2" />
                        <FaYoutube className="w-fit h-fit rounded-full bg-white text-black p-2" />
                        <FaLinkedin className="w-fit h-fit rounded-full bg-white text-black p-2" />
                    </div>
                </div>
            </div>
            <div className="h-full w-10 flex-col justify-end items-end pt-10">
                <a href="#headerdiv">
                    <MdOutlineKeyboardArrowUp className="text-black text-4xl bg-white rounded-full" />
                </a>
            </div>
        </footer>
    )
}

export default Footer