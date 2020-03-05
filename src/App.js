import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    return frase[0];
  };

  const [frase, setFrase] = useState("");

  const showFrase = async () => {
    const frase = await consultarAPI();
    setFrase(frase.quote);
  };


  useEffect(() => {
    showFrase()
  }, [showFrase])



  return (
    <div className="App">
      <header className="App-header">
         {Object.keys(frase).length === 0 ? null : <p>{frase}</p>}
       </header>
    </div>
  );
}

export default App;
