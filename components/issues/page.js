import Image from "next/image"

const IssuesMain = () => {
    return (
        <div className="flex justify-center items-center my-8">
            <div>
                <h1 className="text-red-800 text-2xl mb-8 flex justify-between items-center px-4 font-bold">
                    <div>
                        Issues
                    </div>
                    <div className="text-lg hover:text-black cursor-pointer">
                        All Issues &gt;
                    </div>
                </h1>
                <div className="flex gap-6">
                    <div className="w-[500px]">
                        <Image src={"/weapons_v2.png"} width={500} height={500} alt="weapon" />
                        <div className="flex">
                            <div className="border-r-2 border-cyan-800 h-full">
                                <p className="p-4 text-xl font-bold">
                                    <span className="text-red-800 text-5xl font-bold">1,800</span><br />
                                    nuclear weapons are on high alert
                                </p>
                            </div>
                            <div>
                                <div className="border-b-4 border-cyan-800">
                                    <p className="p-2 font-bold">Nuclear Weapons Abolition</p>
                                </div>
                                <div className="p-2">
                                    <p>PSRN&apos;s Nuclear Weapons Abolition Program amplifies the health professional voice to increase and broaden grassroots support for nuclear weapons abolition.

                                        <br /><br /><span className="text-red-800 font-bold cursor-pointer hover:text-black">Learn More</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[500px]">
                        <Image src={"/wind_farm.jpg"} width={500} height={500} alt="wild farm" />
                        <div className="flex">
                            <div className="border-r-2 border-cyan-800 h-full">
                                <p className="p-4 text-xl font-bold">
                                    <span className="text-red-800 text-5xl font-bold">6</span><br />
                                    years left to avert the worst effects of climate change, according to the IPCC
                                </p>
                            </div>
                            <div>
                                <div className="border-b-4 border-cyan-800 p-2 font-bold">Environment & Health</div>
                                <div className="p-2">PSRN&apos;s Environment and Health Program amplifies the voices of health professionals to advocate for strong action to avert catastrophic climate change and promote clean, healthy, safe energy.

                                    <br /><br /><span className="text-red-800 font-bold cursor-pointer hover:text-black">Learn More</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default IssuesMain