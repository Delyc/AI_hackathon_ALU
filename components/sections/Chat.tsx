import Image from "next/image";
import hero from '../../public/assets/hero2.jpg'


const Chat = () => {
    return (
        <section className="bg-primary-blue h-screen flex ">

            <div className="w-[25rem] h-screen bg-gray-50/10  py-20">

                <div className="overflow-y-auto h-full">

                    <div className="border-b border-white/10 py-5 hover:bg-white/10 px-3">
                        <p className="text-white/90 word-break ">Hello, Heloooooooooooooooooooo</p>
                    </div>

                    <div className="border-b border-white/10 py-5 hover:bg-white/10 px-3">
                        <p className="text-white/90 word-break ">Hello, Heloooooooooooooooooooo</p>
                    </div>
                    <div className="border-b border-white/10 py-5 hover:bg-white/10 px-3">
                        <p className="text-white/90 word-break ">Hello, Heloooooooooooooooooooo</p>
                    </div>
                    <div className="border-b border-white/10 py-5 hover:bg-white/10 px-3">
                        <p className="text-white/90 word-break ">Hello, Heloooooooooooooooooooo</p>
                    </div>
                    <div className="border-b border-white/10 py-5 hover:bg-white/10 px-3">
                        <p className="text-white/90 word-break ">Hello, Heloooooooooooooooooooo</p>
                    </div>
                    <div className="border-b border-white/10 py-5 hover:bg-white/10 px-3">
                        <p className="text-white/90 word-break ">Hello, Heloooooooooooooooooooo</p>
                    </div>


                    <div>

                    </div>
                </div>


            </div>

            <div className="w-full">

                <div className="px-44 py-10 flex flex-col gap-5 w-full">

                    <div>
                        <div className="flex gap-2 items-center">
                            <p className="py-4 px-5 rounded bg-white/10 text-white text-xl">D</p>
                            <p className="text-white/90">Hello</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <div className="flex gap-2 items-center">
                            <Image src={hero} alt="bot profile" height={100} width={55} className="rounded" />
                            <p className="text-white/90">Hello, how may I assist you today!</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-2 items-center">
                            <p className="py-4 px-5 rounded bg-white/10 text-white text-xl">D</p>
                            <p className="text-white/90">Hello</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <div className="flex gap-2 items-center">
                            <Image src={hero} alt="bot profile" height={100} width={55} className="rounded" />
                            <p className="text-white/90">Hello, how may I assist you today!</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex gap-2 items-center">
                            <p className="py-4 px-5 rounded bg-white/10 text-white text-xl">D</p>
                            <p className="text-white/90">Hello</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <div className="flex gap-2 items-center">
                            <Image src={hero} alt="bot profile" height={100} width={55} className="rounded" />
                            <p className="text-white/90">Hello, how may I assist you today!</p>
                        </div>
                    </div>


                </div>


                <div className="fixed bottom-0 py-20  px-44 w-full ">

                    <div className="relative flex">
                    <input className="bg-white/5 py-5 rounded px-5 outline-none text-white/60 w-3/4" />
                    <div className=" -ml-10 mt-5">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" stroke="#Cf1259" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    </div>
                    </div>
                 
     

                </div>
            </div>


        </section>
    );
}

export default Chat;