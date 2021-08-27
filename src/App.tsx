import React from "react";
import colors from "./colors.json";
import "./App.css";

const App = () => {
  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [deg, setDeg] = React.useState(0);
  const [col1, setCol1] = React.useState("B4A6AB");
  const [col2, setCol2] = React.useState("615055");

  const handleChange = () => {
    let randomNumber = Math.trunc(Math.random() * colors.length);
    setDeg(colors[randomNumber].degree);
    setCol1(colors[randomNumber].colorone);
    setCol2(colors[randomNumber].colortwo);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="formwrapper">
          <form className="form">
            <div className="inputgroup">
              <label htmlFor="quote">Quote</label>
              <textarea id="quote" onChange={(e) => setQuote(e.target.value)} />
            </div>
            <div className="inputgroup">
              <label htmlFor="author">Author</label>
              <input type="text" onChange={(e) => setAuthor(e.target.value)} />
            </div>
          </form>
        </div>
        <div className="gradientcontroller">
          <button onClick={handleChange}>Change Gradient</button>
        </div>
      </div>
      <div className="main">
        <div
          className="gradcomponent"
          style={{
            backgroundImage: `linear-gradient(${deg}deg,#${col1}, #${col2} )`,
          }}
        >
          <div className="quotewrapper">
            <p className="quote">{quote}</p>
            <div className="author">
              <p>{author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
