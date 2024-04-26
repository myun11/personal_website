import React, { useState, useEffect } from 'react'

const Home2 = () => {

    const text = 'Hello. I am a full stack developer and I enjoy making applications and optimizing work flow.'
    const [time, setTime] = useState(Math.floor(text.length / 3))
    useEffect(() => {
        setInterval(() => {setTime(prev => prev + 1)}, 80)    
    }, [])
    return (
        <div>
            <h1 className = "bg-center text-white">{text.substring(0, time)}</h1>
        </div>
    )
}

export default Home2