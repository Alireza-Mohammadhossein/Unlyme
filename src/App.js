import React from "react";
import Header from "./components/header/Header";
import "./styles/sass/variables.scss";
import "./styles/sass/app.scss"

function App() {
  return (
    <div id="siteWrapper">
      <div id="be-wrapper" className="be-wrapper">
        <Header />
      </div>
    </div>
  );
}

export default App;
