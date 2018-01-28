import React from 'react';
import logo from '../../assets/img/logo.png';

const Footer = () => {
    return (
        <footer className="page-footer indigo darken-4">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <p>
                            <span className="brand-logo left">
                                <img src={logo} alt="logo" width="44" className="responsive-img m-align" />
                                Reports Administration
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright indigo darken-3">
                <div className="container">
                    &copy; 2018 by <a className="grey-text text-lighten-4" title="GIT profile" rel="noreferrer noopener" target="_blank" href="https://github.com/nikiv84">Ivan Nikolic (nikiv84)</a>
                    <a className="grey-text text-lighten-4 right" rel="noreferrer noopener" href="http://www.bgit.rs" target="_blank">BIT</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;