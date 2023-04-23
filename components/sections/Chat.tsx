import Image from "next/image";
import hero from '../../public/assets/hero2.jpg'
import React, { HtmlHTMLAttributes, useRef } from 'react'
import Button from "../UI/Button";
import Link from "next/link";
interface Conversation {
    role: string,
    content: string
}

const Chat = () => {

    const [value, setValue] = React.useState<string>("")
    const [conversation, setConversation] = React.useState<Conversation[]>([])
    const inputRef = useRef<HTMLInputElement>(null)


    const handleInput = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value)
        },
        [])

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const chatHistory = [...conversation, { role: "user", content: value }]


            const res = await fetch("/api/openAIChat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ messages: chatHistory })
            })

            const data = await res.json()
            setValue("")
            setConversation([
                ...chatHistory, { role: "assistant", content: data.result.choices[0].message.content }
            ])
        }
    }

    const handleRefresh = () => {
        inputRef.current?.focus()
        setValue("")
        setConversation([])
    }

    return (
        <section className=" h-screen flex bg-primary-blue">

            {/* <div className="w-1/2 px-10 py-10">
            <Link className="text-[#Cf1259] font-bold text-4xl  py-5" href="#">Itsinzi</Link>

            <div className="px-10">
                <h1 className="text-white text-6xl mt-5">Welcome!</h1>
                <p className="text-white leading-[30px] tracking-[1px] mt-10 w-5/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut quibusdam, hic quia temporibus dicta quos quisquam suscipit, perspiciatis dolores omnis recusandae deserunt? Cumque nemo quibusdam, perferendis tempore modi in!</p>

            </div>


           
                <div className="flex justify-center mt-20">
                    <Link href="/kiny-chat">
                    <button className="flex gap-3 items-center rounded px-5 py-3 bg-primary-pink text-white font-medium">Chat In
                        <svg width="50px" height="40px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#20603D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><path fill="#FAD201" d="M0 19h36v7H0z"></path><path fill="#00A1DE" d="M32 5H4a4 4 0 0 0-4 4v12h36V9a4 4 0 0 0-4-4z"></path><path fill="#FAD201" d="M26 5l.522 4.034l1.548-3.762l-.539 4.032L30 6.072l-1.565 3.755l3.221-2.484l-2.483 3.222L32.929 9l-3.234 2.469l4.033-.54l-3.762 1.548L34 13l-4.034.523l3.762 1.547l-4.033-.539L32.929 17l-3.756-1.565l2.483 3.222l-3.221-2.484L30 19.929l-2.469-3.234l.539 4.033l-1.548-3.762L26 21l-.522-4.034l-1.549 3.762l.54-4.033L22 19.929l1.565-3.756l-3.221 2.484l2.482-3.222L19.071 17l3.233-2.469l-4.032.539l3.761-1.547L18 13l4.033-.523l-3.761-1.548l4.032.54L19.071 9l3.755 1.565l-2.482-3.222l3.221 2.484L22 6.072l2.469 3.232l-.54-4.032l1.549 3.762z"></path><circle fill="#00A1DE" cx="26" cy="13" r="4"></circle><circle fill="#FAD201" cx="26" cy="13" r="3"></circle></svg>
                    </button>
                    </Link>
              
                </div>

            </div> */}

            <div className="w-full px-20">

                <div className="px-20  py-10 flex flex-col gap-3 w-full h-[70vh] overflow-y-auto">
                    {conversation.map((item, index) => (
                        <React.Fragment key={index}>
                            <br />
                            {item.role === "assistant" ? (


                                <div className="w-full  flex justify-end">
                                    <div className="flex gap-2  w-1/2">
                                        <div className="relative h-[50px] w-[55px]">
                                            <Image src={hero} alt="bot profile" layout="fill" className="rounded absolute" />

                                        </div>
                                        <p className="text-white/90 w-5/6">{item.content}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex gap-2 w-1/2">
                                    <p className="py-4 px-5 rounded bg-white/10 text-white text-xl">D</p>
                                    <p className="text-white/90">{item.content}</p>
                                </div>

                            )}
                        </React.Fragment>
                    ))}




                    {/* {conversation.map((item, index) => {
                        return(
                            <div key={index}>
                                {item.role === "assistant"} ? (
                                    <div className="flex gap-2 items-center">
                            <p className="py-4 px-5 rounded bg-white/10 text-white text-xl">D</p>
                            <p className="text-white/90">{item.content}</p>
                        </div>

                                ): (
                                    <div className="w-full flex justify-end">
                        <div className="flex gap-2 items-center">
                            <Image src={hero} alt="bot profile" height={100} width={55} className="rounded" />
                            <p className="text-white/90">{item.content}</p>
                        </div>
                    </div>
                                )
                            </div>
                        )
                    })} */}







                </div>


                <div className="fixed bottom-0 py-20  px-20 w-full">

                    <div className="relative flex">
                        <input className="bg-white/5 py-5 rounded px-5 outline-none text-white/50 w-3/4" value={value}
                            onChange={handleInput}
                            onKeyDown={handleKeyDown} />
                        <div className=" -ml-10 mt-5">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" stroke="#Cf1259" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>



                </div>
            </div>


        </section>
    );
}

export default Chat;