//Importing React Components
import React from "react";
import logo from '../../img/pokeball.png';
import "./Header.css";

//Header Div
const Header = props => (
    <div className="header">
        <header className="header-header">
            {/* <img src={logo} className="header-logo" alt="logo" /> */}
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="header-title">Pokemon Click Game React</h1>
        </header>
        
        <br></br>

    </div>
);

//Export Component for Use in the Rest of Application.
export default Header;
