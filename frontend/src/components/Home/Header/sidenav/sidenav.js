import React, { Component } from "react";
import { bubble as Menu } from "react-burger-menu";
import "./sidenav.css";
import SideNavItems from "./sidenavitems";

class SideNav extends Component {
  render() {
    return (
      <div id="sidenavitems">
        <Menu right>
          <SideNavItems />
        </Menu>
      </div>
    );
  }
}

export default SideNav;
