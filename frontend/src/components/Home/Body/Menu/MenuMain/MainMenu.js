import React from "react";
import "./menumain.css";
import {Image} from "react-bootstrap";
import menuimg from "../../../../../assets/cafe-menu.jpg";
import menuimg1 from "../../../../../assets/caf-menu1.jpg";

const MainMenu = () => (
  <>
    <div className="main-menu">
        <Image src={menuimg} fluid className="menuimg" />
        <Image src={menuimg1} fluid className="menuimg" />
    </div>
  </>
);

export default MainMenu;
