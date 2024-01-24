import Image from "next/image"

const Committee = () => {
    return (
        <div className='min-h-screen '>
            <h1 className="text-4xl font-bold text-center">Persons involved in PSRN</h1>
            <div className="grid grid-cols-3 gap-6 p-10">
                <div className='h-40 w-96 shadow-xl p-4 rounded-lg bg-slate-900 flex justify-center items-center overflow-hidden'>
                    <div className="w-2/5 h-full flex justify-center items-center">
                        <Image src={"/avatar.png"} alt="avatar" height={200} width={200} className="bg-inherit" />
                    </div>
                    <div className="h-full w-3/5">
                        <p className="text-xl text-sky-500">Sam AltMan</p>
                        <p className="text-slate-300 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quidem possimus commodi laborum qui. Tempora consequatur minima vel molestiae tempore magni ullam nam accusamus, assumenda quo ducimus quae eveniet? Nihil!</p>
                    </div>
                </div>
                <div className='h-40 w-96 shadow-xl p-4 rounded-lg bg-slate-900 flex justify-center items-center overflow-hidden'>
                    <div className="w-2/5 h-full flex justify-center items-center">
                        <Image src={"/avatar.png"} alt="avatar" height={200} width={200} className="bg-inherit" />
                    </div>
                    <div className="h-full w-3/5">
                        <p className="text-xl text-sky-500">Sam AltMan</p>
                        <p className="text-slate-300 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quidem possimus commodi laborum qui. Tempora consequatur minima vel molestiae tempore magni ullam nam accusamus, assumenda quo ducimus quae eveniet? Nihil!</p>
                    </div>
                </div>
                <div className='h-40 w-96 shadow-xl p-4 rounded-lg bg-slate-900 flex justify-center items-center overflow-hidden'>
                    <div className="w-2/5 h-full flex justify-center items-center">
                        <Image src={"/avatar.png"} alt="avatar" height={200} width={200} className="bg-inherit" />
                    </div>
                    <div className="h-full w-3/5">
                        <p className="text-xl text-sky-500">Sam AltMan</p>
                        <p className="text-slate-300 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quidem possimus commodi laborum qui. Tempora consequatur minima vel molestiae tempore magni ullam nam accusamus, assumenda quo ducimus quae eveniet? Nihil!</p>
                    </div>
                </div>
                <div className='h-40 w-96 shadow-xl p-4 rounded-lg bg-slate-900 flex justify-center items-center overflow-hidden'>
                    <div className="w-2/5 h-full flex justify-center items-center">
                        <Image src={"/avatar.png"} alt="avatar" height={200} width={200} className="bg-inherit" />
                    </div>
                    <div className="h-full w-3/5">
                        <p className="text-xl text-sky-500">Sam AltMan</p>
                        <p className="text-slate-300 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quidem possimus commodi laborum qui. Tempora consequatur minima vel molestiae tempore magni ullam nam accusamus, assumenda quo ducimus quae eveniet? Nihil!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Committee