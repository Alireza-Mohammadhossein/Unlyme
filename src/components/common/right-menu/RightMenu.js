import {useState} from "react";
import './right-menu.scss'
// import { useTranslation } from "react-i18next";
// import { ASSETS_URL, SITE_NAME } from "../../types";

const RightMenu = () => {
//   const SITE_NAME = "WayWe";
//   const { t } = useTranslation();
  const [showed, setShowed] = useState(false);

//   const data = [{ id: 1, img: "services.svg", title: "MY_SERVICES" }];

  return (
    <div className={`right-menu ${showed ? "right-menu--showed" : ""}`}>
      <span
        onClick={() => setShowed(!showed)}
        className="right-menu__toggle-icon"
      />
      <div className="right-menu__inner-container">
        <h2>Messenger</h2>
      </div>
    </div>
  );
};

export default RightMenu;
