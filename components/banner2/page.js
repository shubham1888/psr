import Image from "next/image"

const Banner2 = () => {
    return (
        <div className="mb-8 bg-[#5BA1B2] flex">
            <div className="w-1/2 text-white p-6">
                <h1 className="text-3xl my-4">We Need Your Help</h1>
                <div className="border-white border-l-2 border-t-4 p-6 font-semibold">
                    <p>
                        PSRN advocates on the issues you care about by addressing the dangers that threaten communities, using our medical and public health expertise to prevent nuclear war and proliferation, reverse our trajectory towards climate change, protect the public from the harms of fracking and expand clean, renewable energy.
                    </p>
                    <div className="flex justify-center items-center my-4 gap-2">
                        <button className="bg-transparent border-white w-fit px-8 hover:bg-white hover:text-[#5BA1B2] transition-colors py-4 flex justify-center items-center text-center text-nowrap h-10 rounded-full border-2">Become a Member</button>
                        <button className="bg-transparent border-white w-fit px-8 hover:bg-white hover:text-[#5BA1B2] transition-colors py-4 flex justify-center items-center text-center text-nowrap h-10 rounded-full border-2">Give Now</button>
                        <button className="bg-transparent border-white w-fit px-8 hover:bg-white hover:text-[#5BA1B2] transition-colors py-4 flex justify-center items-center text-center text-nowrap h-10 rounded-full border-2">Get Involved</button>
                    </div>
                </div>
            </div>
            <Image className="w-1/2" src={"/banner2img.jpg"} width={200} height={200} alt="cindy-parker-walter-tsou-epa-hearing" />
        </div >
    )
}

export default Banner2