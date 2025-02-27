import React, { useState } from 'react'

const Pracitce = () => {
const [data,setData]=useState("")
const [hi,setHi]=useState("")

  return (
    <div>
      <h1>Bilal Ansar</h1>
      <h4>{data}</h4>
      <button onClick={()=>setData("you have clicked button")}>Click me to show data</button>
      <h2>JUNAID KHAN</h2>
      <button onClick={()=>setHi("I LOVE PAKISTAN")}>Click Me</button>
      <h3>{hi}</h3>
    </div>
  )
}

export default Pracitce
