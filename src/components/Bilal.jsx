import { useState, useEffect } from "react";

const Bilal = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-64">
      <h1 className="text-xl font-bold">Counter: {count}</h1>
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
      </button>
    </div>
  );
};

export default Bilal ;