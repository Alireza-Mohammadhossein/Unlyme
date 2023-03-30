import React from 'react';
import Header from "../common/header/Header";
import Menu from "../common/menu/Menu";
import RightMenu from "../common/right-menu/RightMenu";
import Switcher from "../../routes";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/sass/app.scss";

function App() {
  return (
    <div id="siteWrapper">
        <div id="be-wrapper" className="be-wrapper">
          <Header />
          <Menu />
          <RightMenu />
          <Switcher />
          <div className="modal-backdrop fade show" style={{ display: "none" }} />
        </div>  
    </div>
  );
}

export default App;
