import React from 'react'
import { useState } from 'react'

const WorldsDataSummary = () => {
    const [data, setData] = useState([])
    const average = array => array.reduce((a, b) => a + b) / array.length;

    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
            const text = (e.target.result)
            //   console.log(text)
            //   alert(text)
            const first_split = text.split("...")
            const second_split = []
            for (let i = 0; i < first_split.length; i ++) {
                let part = first_split[i].split(",")
                second_split.push(part)
            }
            const lck = []
            const lpl = []
            for (let region = 0; region < second_split.length; region++) {
                for (let match = 0; match < second_split[region].length; match++) {
                    let score = second_split[region][match]
                    const [kills, time_string] = score.split("/")
                    const time_split = time_string.split(":")
                    const time_decimal = Number(time_split[0]) +  (Number(time_split[1]) / 60)
                    let avg = Number(kills) / time_decimal / time_decimal
                    if (region === 0) {
                        lck.push(avg)                 
                    }
                    if (region === 1) {
                        lpl.push(avg)
                    }
                    if (region === 2) {
                        lck.push(avg)
                        lpl.push(avg)
                    }
                }
            }
            setData({"LCK" : lck, "LPL" : lpl})
        };
        const t = reader.readAsText(e.target.files[0])
        // setData(text)
    }

    return (
        <div>
            
            <input type = "file" onChange = {(e) => showFile(e)} />
        

            <button onClick = {() => console.log(data)}>show data</button>
            <button onClick = {() => {
                console.log("LCK : ", average(data["LCK"]))
                console.log("LPL : ", average(data["LPL"]))
            }}>Averages</button>
            <br/>
            LCK : {average(data["LCK"])}
            <br/>
            LPL : {average(data["LPL"])}
        </div>
    )
}

export default WorldsDataSummary