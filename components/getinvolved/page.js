'use client'
import Image from "next/image"

const GetInvolved = () => {
    return (
        <div className="min-h-screen w-[100vw] relative">
            <Image src={"/Tucson-AZ-demo.jpg"} width={1000} height={1000} alt="Tucson-AZ-demo" />
            <div className="absolute top-10 left-10 text-white font-semibold">
                <h1 className="text-3xl my-4">Get Involved</h1>
                <div className="border-[#5BA1B2] border-l-2 border-t-4 p-4 w-1/2">
                    <p>PSRN has local chapters throughout the United States. Find your local chapter to see how you can help your community. </p>
                    <button className="border-2 text-red-800 bg-white hover:bg-red-800 hover:text-white transition-colors rounded-full px-6 py-3 my-4">Find Your Local Chapter</button>
                </div>
            </div>
        </div>
    )
}

export default GetInvolved