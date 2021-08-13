import React, {useState} from "react";
import './App.css';

function App() { 
  const [emoji,setEmoji]=useState("happy");
  let toggle=(e)=>{
    if(emoji==="happy")
    {
      setEmoji("sad");
    }
    else
    {
      setEmoji("happy");
    }
  }

  if(emoji==="happy")
  {
  return (
    <div className="App">
        <h1 style={{color:"green",cursor:"pointer"}} onClick={toggle}>:)</h1>
    </div>
  );
  }
  else
  {
    return (
      <div className="App">
        <h1 style={{color:"red",cursor:"pointer"}} onClick={toggle}>:(</h1>
      </div>
    );
  }
  
}

export default App;
