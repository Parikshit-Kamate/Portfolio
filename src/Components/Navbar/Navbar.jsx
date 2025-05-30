import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg navbar-dark"
                style={{ backgroundColor: '#0F172A' }}
            >
                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/projectlist">
                                    Project List
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Navbar;
