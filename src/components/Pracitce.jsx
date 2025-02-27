import React, { useState } from 'react'

const Pracitce = () => {
<<<<<<< HEAD
const [data,setData]=useState("")

  return (
    <div>
      <h1>Bilal Ansar</h1>
      <h4>{data}</h4>
      <button onClick={()=>setData("you have clicked button")}>Click me to show data</button>
=======
    const {hi,setHi}=useState("");
  return (
    <div>
      <h1>JUNAID</h1>
      <button onClick={(()=>setHi())}> Click Me </button>
      <h2>{hi}</h2>
>>>>>>> 948859e54e1087d3fd3845fa91d04a62a4c45af6
    </div>
  )
}

export default Pracitce
