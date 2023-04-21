import React, { HtmlHTMLAttributes, useRef } from 'react'
interface Conversation{
  role: string,
  content: string
}
export default function Home() {

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

    <>
    <h1 className='text-6xl text-red-500'>Helloooo</h1>
<div>
  <h1>Type be;owkkf</h1>
  <input 
  placeholder='type here'
  className='py-3 px-5 border'
  value={value}
  onChange={handleInput}
  onKeyDown={handleKeyDown}
  />

<button onClick={handleRefresh}>Start new conversation</button>

  <div>
    {conversation.map((item, index) => {
      return(
        <div key={index}>
          {item.role === "assistant"} ? (
            <div>
              assistant : {item.content}
              </div>
          ) : (
            <div>
              user: {item.content}
              </div>
          )
          </div>
      )
    })}
  </div>
</div>
    </>
  )
}
