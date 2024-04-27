import React, { useState, useEffect } from 'react'

const Home2 = () => {

    const text = 'Hello. I am a full stack developer and I enjoy making applications and optimizing work flow.'
    const [time, setTime] = useState(Math.floor(text.length / 1.5))
    useEffect(() => {
        setInterval(() => {setTime(prev => prev + 1)}, 80)    
    }, [])
    return (
        <div>
            <h1 className = "bg-center text-white text-6xl items-center justify-center flex"> My Portfolio</h1>
            <h1 className = "bg-center text-white text-4xl items-center justify-center flex">{text.substring(0, time)}</h1>

            <h2 className = "bg-center text-white text-xl items-center justify-center flex"> filler abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef</h2>
        </div>
    )
}

export default Home2