import React from 'react';
import "../CSS/Menu.css";
function Navbar() {
    return (
        <div style={{paddingBottom:"1rem", paddingTop: "1rem"}}>
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="#" style={{fontSize:"1.8rem",color:"black",fontWeight:"bolder"}}>
                    BACK TO HOME
                </a>
                </div>
            </div>
            </nav>
        </div>
    );
}
export default Navbar;