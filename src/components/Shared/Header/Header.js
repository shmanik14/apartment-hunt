import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';
import { StickyContainer, Sticky } from 'react-sticky';
import { initializeFramework, logOutMethod } from '../../Login/Login/Login';


const Header = () => {
    initializeFramework();
    const logOutHandle = () => {
		logOutMethod();
	};
    const email = sessionStorage.getItem("email");
    return (
        <StickyContainer style={{ maxHeight: "100px", overflowY: "auto" }}>
            <Sticky relative={true} topOffset={80}>
            { () => (
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
                            {
                                email ? <Link onClick={logOutHandle}>Log Out</Link> : <Link to="/login">Login</Link>
                            }                           
                                                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
        ) }
        </Sticky>
        </StickyContainer>
    );
};

export default Header;