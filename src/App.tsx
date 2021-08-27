import React from "react";
import colors from "./colors.json";
import "./App.css"

const App = () => {

  const [deg, setDeg] = React.useState(0);
  const [col1, setCol1] = React.useState("B4A6AB");
  const [col2, setCol2] = React.useState("615055");
  
  const handleChange = () => {
    let randomNumber= Math.trunc(Math.random() * colors.length);
    setDeg(colors[randomNumber].degree);
    setCol1(colors[randomNumber].colorone);
    setCol2(colors[randomNumber].colortwo);
  }


  return (
    <div className="container" style={{ backgroundImage: `linear-gradient(${deg}deg, #${col1}, #${col2})`}}>
      <header>
        <p className="degree">{deg}%</p>
        <div className="color" style={{backgroundColor: `#${col2}`}}></div>
        <div className="color" style={{backgroundColor: `#${col1}`}}></div>
      </header>
      <button className="change" onClick={handleChange}></button>
    </div>
  )
}

export default App
