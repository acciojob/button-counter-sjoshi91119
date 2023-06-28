
import React, { useState } from "react";
import './../styles/App.css';
import { getEventListeners } from "events";

const App = () => {

  const [number, setnumber] = useState(0);

  const handleClick =() => {
    setnumber(number + 1);
  }
  return (
    <div>
      {/* Do not remove the main div */}
      
      <p>button clicked {number} times</p>

      <button onClick={handleClick} >Click me</button>

    </div>
  )
}

export default App
