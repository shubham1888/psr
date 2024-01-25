import Image from "next/image"

const MainBanner = () => {
    return (
        <div className='min-h-screen w-full relative z-20'>
            <Image src={"/earth-banner.jpg"} layout="fill" alt="Earth-Banner" />
            <div className="absolute top-6 left-6 md:top-20 md:left-20 text-white">
                <p className="text-xl md:text-3xl lg:text-5xl md:my-4">We Must Prevent</p>
                <div className="border-t-8 border-l-2 border-cyan-700 p-2 md:p-8 w-full md:w-1/2">
                    <h1 className="text-lg md:text-4xl mb-2 md:mb-6">
                        What We Cannot Cure
                    </h1>
                    <p className="text-sm md:text-3xl font-bold">Guided by the values and expertise of medicine and public health, we work to protect human life from the gravest threats to health and survival.</p>
                    <button className="w-28 font-bold text-sm my-2 h-8 md:my-4 md:h-12 rounded-full bg-white text-red-800 hover:bg-red-800 hover:text-white transition-colors ease-linear">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default MainBanner