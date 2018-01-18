import React from 'react';
import logo from '../../assets/img/logo.png';
import NavLink from './NavLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="indigo darken-4 noshdw">
            <nav className="container indigo darken-4">
                <div className="nav-wrapper">
                    <Link to="/reports">
                        <span className="brand-logo left hide-on-xsmall-only">
                            <img src={logo} alt="logo" className="responsive-img m-align hide-on-small-only" />
                            Reports Administration</span>
                    </Link>
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
    )
}

export default Header;