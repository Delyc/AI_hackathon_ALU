import Image from "next/image";
import hero from '../../public/assets/hero2.jpg'
import React, { HtmlHTMLAttributes, useRef } from 'react'
interface Conversation{
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
  
    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement> )=> {
    if(e.key === "Enter") {
      const chatHistory = [...conversation, {role: "user", content: value}]
  
  
      const res = await fetch("/api/openAIChat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({messages: chatHistory})
      })
  
      const data = await res.json()
      setValue("")
      setConversation([
        ...chatHistory, {role: "assistant", content: data.result.choices[0].message.content}
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

                <div className="px-20 py-10 flex flex-col gap-3 w-full h-[70vh] overflow-y-auto">
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


                <div className="fixed bottom-0 py-20  px-20 w-full ">

                    <div className="relative flex">
                    <input className="bg-white/5 py-5 rounded px-5 outline-none text-white/50 w-3/4" value={value}
  onChange={handleInput}
  onKeyDown={handleKeyDown}/>
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