import React, { useRef } from "react";
import colors from "./data/colors.json";
import quotes from "./data/quotes.json";
import "./App.css";

const App = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const [quote, setQuote] = React.useState("");
  const [author, setAuthor] = React.useState("");

  const [deg, setDeg] = React.useState(0);
  const [col1, setCol1] = React.useState("B4A6AB");
  const [col2, setCol2] = React.useState("615055");
  const [fontSize, setFontSize] = React.useState(16);

  const handleChange = () => {
    let randomNumber = Math.trunc(Math.random() * colors.length);
    setDeg(colors[randomNumber].degree);
    setCol1(colors[randomNumber].colorone);
    setCol2(colors[randomNumber].colortwo);
  };

  const handleQuote = () => {
    let randomNumber = Math.trunc(Math.random() * quotes.length);
    setQuote(quotes[randomNumber].quote);
    setAuthor(quotes[randomNumber].author);
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `linear-gradient(${deg}deg,#${col1}, #${col2} )`,
      }}
    >
      <div className="header">
        <div className="formwrapper">
          <form className="form">
            <div className="inputgroup">
              <label htmlFor="quote">Quote</label>
              <textarea
                id="quote"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="author">Author</label>
              <textarea
                value={author}
                id="author"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="inputgroup">
              <label htmlFor="fontsize">Font Size</label>
              <input
                type="number"
                value={fontSize}
                id="fontsize"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                  setFontSize(+e.target.value)
                }
              />
            </div>
          </form>
        </div>
        <div className="gradientcontroller">
          <div className="gradientbuttons">
            <button onClick={handleChange}>Change Gradient</button>
            <button onClick={handleQuote}>Random Quote</button>
          </div>
        </div>
      </div>
      <div className="main">
        <div
          ref={componentRef}
          className="gradcomponent"
          style={{
            backgroundImage: `linear-gradient(${deg}deg,#${col1}, #${col2} )`,
          }}
        >
          <div className="quotewrapper">
            <p className="quote" style={{ fontSize: `${fontSize}px` }}>
              {quote}
            </p>
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
