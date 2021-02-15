import React from 'react';
import './header.css'
import SideNav from './sidenav/sidenav'

const Header = (props) => {

    return (
        <header>
            <div>
                <SideNav/>               
            </div>
        </header>
    )


}

export default Header;