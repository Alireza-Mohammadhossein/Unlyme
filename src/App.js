import React from "react";
import Header from "./components/common/header/Header";
import "./styles/sass/variables.scss";
import "./styles/sass/app.scss"
import Menu from "./components/common/menu/Menu";
import RightMenu from "./components/common/right-menu/RightMenu";

function App() {
  return (
    <div id="siteWrapper">
      <div id="be-wrapper" className="be-wrapper">
        <Header />
        <Menu />
        <RightMenu />
      </div>
    </div>
  );
}

export default App;
