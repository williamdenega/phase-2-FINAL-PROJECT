import React from 'react'
import { NavLink, useRouteMatch  } from 'react-router-dom'

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",

};

const navStyle = {
    background: 'bisque',
    padding: '15px',
    variant: "dark"
}


function NavBar() {

    let match = useRouteMatch("/")
  return (
    
    <div className="navbar" style={navStyle}>
        {match.isExact ? null :
        <NavLink  
            to='/'
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
        }}
        >Home
        </NavLink>
        }
 
        <NavLink
            to= '/dogs'
            exact
            style={linkStyles}
            activeStyle={{
                background:'darkblue'
            }}
        >DOGS
        </NavLink>
        <NavLink 
            to='/cats'
            exact
            style={linkStyles}
            activeStyle={{
                background: 'darkblue'
            }}
        >CATS
        </NavLink>
        <NavLink
            to='/favorites'
            exact
            style={linkStyles}
            activeStyle= {{
                background: 'darkblue'
            }}>
            FAVORITES
        </NavLink>

    </div>
  )
}
export default NavBar