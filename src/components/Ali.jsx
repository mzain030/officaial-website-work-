import React, { useState } from 'react';

function Ali() {
  // Declare a state variable named 'name' and a function to update it named 'setName'
  const [name, setName] = useState('');

  const handleChange = (event) => {
    // Update the state with the value from the input field
    setName(event.target.value);
  };

  return (
    <>
    <center>
    <div>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
      </form>
      <p>Your name is: {name}</p>
    </div>
    </center>
    </>
  );
}

export default Ali;

