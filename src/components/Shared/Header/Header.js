import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';
import { StickyContainer, Sticky } from 'react-sticky';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../Login/Login/firebase.config";
import { setNewUser } from '../../../redux/actions/userActions';
import { connect } from 'react-redux';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Header = (props) => { 
    const { setNewUser, user } = props;
    const signOut = () => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            setNewUser({});  
          })
          .catch((error) => {
            // An error happened.
          });
      };
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
                               user.email ? <Link onClick={signOut}>Log Out</Link> : <Link to="/login">Login</Link>
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

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = {
    setNewUser: setNewUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);