import React, { useState } from 'react'

const Pracitce = () => {
const [data,setData]=useState("")

  return (
    <div>
      <h1>Bilal Ansar</h1>
      <h4>{data}</h4>
      <button onClick={()=>setData("you have clicked button")}>Click me to show data</button>
    </div>
  )
}

export default Pracitce
