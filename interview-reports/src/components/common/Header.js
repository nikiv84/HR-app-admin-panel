import React from 'react';
import logo from '../../assets/img/logo.png';
import NavLink from './NavLink';

const Header = () => {
    return (
        <div className="indigo darken-4 noshdw">
            <div className="container">
                <div className="row">
                    <nav className="indigo darken-4">
                        <div className="nav-wrapper">
                            <a href="index.html" className="brand-logo left">
                                <img src={logo} alt="logo" className="responsive-img m-align hide-on-small-only" />Reports Administration</a>
                            <ul className="right nav-btns">
                                <li>
                                    <NavLink to="/reports">Reports</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/create-report">Create report</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;