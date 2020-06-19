import React from 'react';
import { NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <h1 className="navbar-brand">Welcome</h1>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to={"/"}>Main</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/information"}>Information</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}