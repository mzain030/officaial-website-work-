import React, { useState } from 'react'

const Pracitce = () => {
    const {hi,setHi}=useState("");
  return (
    <div>
      <h1>JUNAID</h1>
      <button onClick={(()=>setHi())}> Click Me </button>
      <h2>{hi}</h2>
    </div>
  )
}

export default Pracitce
