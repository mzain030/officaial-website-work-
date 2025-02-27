import React from 'react'
import mytask from './conetxt/Contextr'
import JunaidKhany from './JunaidKhany'
const Junaidkhan = () => {
const newobject={
  first:"junaid",
  last:"arshad",
  age:20,
  address:"pattoki"
}

  return (
    <div>
      <input>Junaidkhan</input>
    <mytask.Provider value={newobject}>
      <JunaidKhany/>
    </mytask.Provider>
   
    </div>
  )
}

export default Junaidkhan
