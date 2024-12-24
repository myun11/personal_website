import React from 'react'

// Helper jsx function for displaying different technologies in bubbles
const Bubble = (props) => {
  return (
    <div className = "mr-1.5 mt-2 inline-block bg-teal-950 border-2 border-teal-900 text-teal-300 px-2 py-1 rounded-full text-xs font-medium shadow-xl">
        {props.text}
    </div>
  )
}

export default Bubble