import { useState, useEffect } from "react";

const Bilal = () => {
  
  // for counter 
  const [data,setData]=useState(0);

  const [cont,setCont]=useState(0);
const [second,setSecond]=useState(0);

useEffect(() => {
setSecond(cont+2)
}, [cont])
// chat gpt code 
  // const [count, setCount] = useState(0);
  // const [isRunning, setIsRunning] = useState(false);

  // useEffect(() => {
  //   if (isRunning) {
  //     const interval = setInterval(() => {
  //       setCount((prevCount) => prevCount + 1);
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }
  // }, [isRunning]);

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-64">
      {/* <h1 className="text-xl font-bold">Counter: {count}</h1>
      <button
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        onClick={() => setIsRunning(!isRunning)}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        onClick={() => { setCount(0); setIsRunning(false); }}
      >
        Reset
      </button> */}

<div className="container">
  <button type="button" onClick={()=>setData(data+1)}>Click Me to count How many times you clicked</button>
</div>

<h1>{data}</h1>

<button type="button" onClick={()=>setData(data-1)}>Click Me to - your counts</button>


{/* one button two workings */}
<h1>One button two works</h1>
<h3>{cont}</h3>
<button type="button" onClick={()=>setCont(cont+1)}>click me to add </button>
<h3>{second}</h3>
    </div>
  );
};

export default Bilal ;