import Image from "next/image"

const Issues = () => {
    return (
        <div>
            <div className="relative">
                {/* <Image src={"/solar-panels-aerial.jpg"} alt="solar-panels-aerial" layout="fill" /> */}
                <img src="/solar-panels-aerial.jpg" alt="solar-panels-aerial" className="h-[100vh] w-[100vw]" />
                <div className="absolute top-0 left-0 text-white text-3xl font-bold flex items-center justify-start h-full px-20">
                    Issues
                </div>
            </div>
            <div className="px-20">
                <h1 className="text-5xl font-semibold border-[#5BA1B2] border-b-4 my-4">Our Focus</h1>
                <div className="flex justify-center items-center gap-4">
                    <div className="w-1/2 p-6">
                        <p>PSR advocates on the issues you care about by addressing the dangers that threaten communities, using our medical and public health expertise to:</p>
                    </div>
                    <div className="w-1/2 p-6">
                        <ul>
                            <li><span className="font-bold mx-4">&gt;</span>Prevent nuclear war and proliferation</li>  
                            <li><span className="font-bold mx-4">&gt;</span>Rein in military spending to reinvest in community needs</li>   
                            <li><span className="font-bold mx-4">&gt;</span>Reverse our trajectory towards climate change</li>  
                            <li><span className="font-bold mx-4">&gt;</span>Replace fossil fuels with 100% renewable energy</li>    
                            <li><span className="font-bold mx-4">&gt;</span>Promote the principles of diversity, equity, inclusion, and justice</li>    
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-4xl font-semibold mx-16">Issues</h1>
                <div className="flex justify-center items-center gap-4">
                    <div className="flex-col py-6">
                        {/* Image */}
                        <div className="h-[200px] w-[200px] bg-slate-400 border-[#5BA1B2] border-b-4"></div>
                        <p>Our Impacts</p>
                        <button className="bg-red-800 text-white rounded-full px-8 py-1">Visit Page</button>
                    </div>
                    <div className="flex-col py-6">
                        {/* Image */}
                        <div className="h-[200px] w-[200px] bg-slate-400 border-[#5BA1B2] border-b-4"></div>
                        <p>Our Impacts</p>
                        <button className="bg-red-800 text-white rounded-full px-8 py-1">Visit Page</button>
                    </div>
                    <div className="flex-col py-6">
                        {/* Image */}
                        <div className="h-[200px] w-[200px] bg-slate-400 border-[#5BA1B2] border-b-4"></div>
                        <p>Our Impacts</p>
                        <button className="bg-red-800 text-white rounded-full px-8 py-1">Visit Page</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Issues