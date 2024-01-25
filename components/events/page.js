import Image from "next/image"

const Events = () => {
    return (
        <div className="flex flex-col md:flex md:flex-row justify-center items-center py-6 px-6 md:px-12">
            <div>
                <div>
                    <Image src={"/health-heroes-awards-video.jpg"} width={500} height={500} alt="health-heroes-awards-video" />
                </div>
                <div className="ml-6 border-[#5BA1B2] border-l-2">
                    <h1 className="text-xl font-semibold border-[#5BA1B2] border-b-2 p-4">PSRN Health Heroes Awards Video</h1>
                    <p className="p-4">If you missed this year&apos;s Health Heroes Awards, video of the presentation is now available online.</p>
                    <button className="bg-red-800 text-white w-1/2 h-10 ml-10 rounded-full text-center">Watch Now &gt;&gt;</button>
                </div>
            </div>
            <div>
                <div className="border-[#5BA1B2] border-t-4 border-l-2 p-4 mb-4">
                    <h1 className="text-2xl font-semibold">Shifting Paradigms: A Grassroots Response to Industry and Climate</h1>
                    <p className="text-red-800 font-semibold">January 23 - January  26</p>
                    <p>Register now for PSRN Pennsylvani&apos;s 2nd annual environmental health conference.</p>
                </div>
                <div className="border-[#5BA1B2] border-t-4 border-l-2 p-4 mb-4">
                    <h1 className="text-2xl font-semibold">Shifting Paradigms: A Grassroots Response to Industry and Climate</h1>
                    <p className="text-red-800 font-semibold">January 23 - January  26</p>
                    <p>Register now for PSRN Pennsylvania&apos;s 2nd annual environmental health conference.</p>
                </div>
                <div className="border-[#5BA1B2] border-t-4 border-l-2 p-4 mb-4">
                    <h1 className="text-2xl font-semibold">Shifting Paradigms: A Grassroots Response to Industry and Climate</h1>
                    <p className="text-red-800 font-semibold">January 23 - January  26</p>
                    <p>Register now for PSRN Pennsylvania&apos;s 2nd annual environmental health conference.</p>
                </div>
            </div>
        </div>
    )
}

export default Events