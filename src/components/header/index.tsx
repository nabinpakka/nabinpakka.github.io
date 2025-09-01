import React, { useEffect, useState } from 'react';
import { scroll_, stickyNav } from '@app/utility';
import HamburgerToggler from './hamburger-toggler';

export default function Header() {
    useEffect(() => {
        window.addEventListener('scroll', stickyNav);
        window.addEventListener('scroll', scroll_);
    });

    const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <div className={`header-top-fixed one-page-nav ${openMenu ? 'menu-open menu-open-desk' : ''}`}>
                <div className="container">
                    {/* Brand */}
                    <div className="logo">
                        <a className="navbar-brand -ml-2" href="/">
                            <img className="logo-dark" width={50} alt="logo dark" src="assets/img/logo.png" />
                            <img className="logo-light" width={50} alt="logo light" src="assets/img/logo.png" />
                            {/* <img className="logo-dark" width={37} alt="logo dark" src="assets/img/logo-1.png" />
                            <img className="logo-light" width={37} alt="logo light" src="assets/img/logo-1.png" /> */}
                        </a>
                    </div>
                    {/* / */}
                    <ul className="main-menu">
                        <li className="active">
                            <a data-scroll-nav={0} href="#home">
                                <span className="m-icon">
                                    <i className="bi-house-door" />
                                </span>
                                <span className="m-text">Home</span>
                            </a>
                        </li>
                        <li>
                            <a data-scroll-nav={1} href="#about">
                                <span className="m-icon">
                                    <i className="bi-person" />
                                </span>
                                <span className="m-text">About</span>
                            </a>
                        </li>
                        <li>
                            <a data-scroll-nav={2} href="#portfolio">
                                <span className="m-icon">
                                    <i className="bi-briefcase" />
                                </span>
                                <span className="m-text">Portfolio</span>
                            </a>
                        </li>
                        <li>
                            <a data-scroll-nav={3} href="#services">
                                <span className="m-icon">
                                    <i className="bi-columns" />
                                </span>
                                <span className="m-text">Certifications</span>
                            </a>
                        </li>
                        <li>
                            <a data-scroll-nav={4} href="#awards">
                                <span className="m-icon">
                                    <i className="bi-columns" />
                                </span>
                                <span className="m-text">Awards</span>
                            </a>
                        </li>
                        {/* <li>
                            <a data-scroll-nav={4} href="#contactus">
                                <span className="m-icon">
                                    <i className="bi-telephone" />
                                </span>
                                <span className="m-text">Contact</span>
                            </a>
                        </li> */}
                    </ul>
                    <HamburgerToggler openMenu={openMenu} setOpenMenu={setOpenMenu} />
                </div>
            </div>
        </>
    );
}
