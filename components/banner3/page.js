import Image from "next/image"

const Banner3 = () => {
    return (
        <div className="mb-8 flex px-8">
            <div className="flex justify-center items-center w-1/4">
                <Image src={"/banner3img.jpg"} width={600} height={600} alt="cindy-parker-walter-tsou-epa-hearing" />
            </div>
            <div className="w-3/4 p-6">
                <h1 className="text-3xl my-4 font-bold">Featured Report</h1>
                <div className="border-[#5BA1B2] border-l-2 border-t-4 p-4">
                    <h2 className="text-red-800 text-2xl font-semibold mb-4">FRACKING WITH “FOREVER CHEMICALS” IN PENNSYLVANIA</h2>
                    <p className="font-semibold">This new report from PSR details the risks from injecting PFAS into Pennsylvania’s oil and gas wells, as well as risks from the disposal of millions of tons of liquid and solid waste associated with the wells.</p>
                    <div className="my-4 flex justify-start font-semibold items-center gap-4">
                        <button className="border-2 text-white bg-[#5BA1B2] hover:bg-white hover:text-[#5BA1B2]  transition-colors rounded-full px-6 py-4 outline-none">View Report</button>
                        <button className="border-2 text-white bg-[#5BA1B2] hover:bg-white hover:text-[#5BA1B2] transition-colors  rounded-full px-6 py-4 outline-none">More Resources</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Banner3