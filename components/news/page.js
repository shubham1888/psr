import Image from "next/image"

const RecentNews = () => {
    return (
        <div className="flex justify-center items-center my-8 py-4 px-16">
            <div>
                <h1 className="text-2xl mb-8 flex justify-between items-center px-4 font-bold">
                    <div>
                        Recent News
                    </div>
                    <div className="text-lg hover:text-black cursor-pointer text-red-800">
                        All News &gt;
                    </div>
                </h1>
                <div className="flex gap-4">
                    <div className="border-l-2 border-t-4 border-cyan-800 p-4 w-1/4">
                        {/* Title */}
                        <h1 className="font-bold">PSNR joins amicus brief on critical Supreme Court case</h1>
                        {/* Content */}
                        <p>The case, known as Loper Bright Enterprises v. Raimondo, threatens to greatly weaken the power of departments and agencies like Health and Human Services, Environmental Protection Agency, Centers for Disease Control and Prevention and others to interpret laws passed by Congress.</p>
                        <p><br /><span className="text-red-800 font-bold cursor-pointer hover:text-black">Learn More</span></p>
                    </div>
                    <div className="border-l-2 border-t-4 border-cyan-800 p-4 w-1/4">
                        {/* Title */}
                        <h1 className="font-bold">Tell Congress: Defend the Arctic!</h1>
                        {/* Content */}
                        <p>The Arctic National Wildlife Refuge is no place for the oil and gas industry’s greed. Tell your Representative: vote NO on H.R. 6285!</p>
                        <p><br /><span className="text-red-800 font-bold cursor-pointer hover:text-black">Learn More</span></p>
                    </div>
                    <div className="border-l-2 border-t-4 border-cyan-800 p-4 w-1/4">
                        {/* Title */}
                        <h1 className="font-bold">Colorado environmental groups file federal lawsuit to halt Rocky Flats trail</h1>
                        {/* Content */}
                        <p>Coverage in The Denver Post of lawsuit brought by PSRN over proposed trail on plutonium-contaminated land.</p>
                        <p><br /><span className="text-red-800 font-bold cursor-pointer hover:text-black">Learn More</span></p>
                    </div>
                    <div className="border-l-2 border-t-4 border-cyan-800 p-4 w-1/4">
                        {/* Title */}
                        <h1 className="font-bold">Tell President Biden and EPA: Finalize standards to protect health!</h1>
                        {/* Content */}
                        <p>Petition President Biden and EPA Administrator Regan need to act boldly and swiftly to finalize and implement the strongest possible pollution standards by May of 2024. Sign the petition today!</p>
                        <p><br /><span className="text-red-800 font-bold cursor-pointer hover:text-black">Learn More</span></p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RecentNews