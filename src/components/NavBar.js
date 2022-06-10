import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };


 function NavBar() {
  return (
    
    <div className="navbar">
        <NavLink
        to='/'
        exact
        style={linkStyles}
        activeStyle={{
            background: "darkblue",
        }}
        >Home
        </NavLink>
        <NavLink
            to= '/page2'
            exact
            style={linkStyles}
            activeStyle={{
                background:'darkblue'
            }}
        >PAGE 2
        </NavLink>
        <NavLink 
            to='/page3'
            exact
            style={linkStyles}
            activeStyle={{
                background: 'darkblue'
            }}
        >PAGE 3
        </NavLink>
    </div>
  )
}
export default NavBar