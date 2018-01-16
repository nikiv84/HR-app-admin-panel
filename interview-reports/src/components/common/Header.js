import React from 'react';
import logo from '../../assets/img/logo.png';

const Header = () => {
    return (
        <div className="indigo darken-4 noshdw">
            <div className="container">
                <div className="row">
                    <nav className="indigo darken-4">
                        <div className="nav-wrapper">
                            <a href="index.html" className="brand-logo left">
                                <img src={logo} alt="logo" className="responsive-img m-align" /> Reports Administration</a>
                            <ul className="right hide-on-small-only nav-btns">
                                <li>
                                    <a className="waves-effect waves-light btn indigo lighten-5 indigo-text active" href="index.html">Candidates</a>
                                </li>
                                <li>
                                    <a className="waves-effect waves-light btn indigo lighten-5 indigo-text" href="index.html">Candidates</a>
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