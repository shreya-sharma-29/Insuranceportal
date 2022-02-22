import React from "react"
import "./header.css"
import Logo from "./logo1.png"
function Header() {
  return (
    <div id="header">
      <div id="nav">
        <img className="name" src={Logo} alt="logo" />
          <button id="dataButton">LOGOUT</button>
        </div>
        <div id="adminportal">
          <h2> Admin portal </h2>
        </div>
        
      </div>
      
  )
}
export default Header
