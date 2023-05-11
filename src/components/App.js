import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name, setName] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <form>
          <label for="name">Enter your name:</label>
          <br />
          <input id="name" type="text" onChange={(e) => {setName(e.target.value)}} />
        </form>
        {name ? <p>Hello {name}!</p> : <p></p>}
    </div>
  )
}

export default App
