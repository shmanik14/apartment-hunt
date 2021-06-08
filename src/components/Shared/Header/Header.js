import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <div className="main-header">
            <div className="container">
                <Navbar expand="lg">
                    <Link to="/"><img src={logo} alt="Apartment Hunt Logo"/></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link to="/">Home</Link>
                            <Link to="/apartments">Apartments</Link>
                            <Link to="/">Contact</Link>
                            <Link to="/dashboard">Dashboard</Link>                            
                            <Link to="/login">Login</Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;