import Image from "next/image"

const MainBanner = () => {
    return (
        <div className='min-h-screen w-full relative'>
            <Image src={"/earth-banner.jpg"} layout="fill" alt="Earth-Banner" />
            <div className="absolute top-20 left-20 text-white">
                <p className="text-5xl my-4">We Must Prevent</p>
                <div className="border-t-8 border-l-2 border-cyan-700 p-8 w-1/2">
                    <h1 className="text-4xl mb-6">
                        What We Cannot Cure
                    </h1>
                    <p className="text-3xl font-bold">Guided by the values and expertise of medicine and public health, we work to protect human life from the gravest threats to health and survival.</p>
                    <button className="w-40 font-bold my-4 h-12 rounded-full bg-white text-red-800 hover:bg-red-800 hover:text-white transition-colors ease-linear">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default MainBanner