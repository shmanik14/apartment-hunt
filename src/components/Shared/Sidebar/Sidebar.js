import React from 'react';
import './Sidebar.css'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="dashboard-sidebar">
            <h4 className="dashboard-head">Dashboard</h4>
            <Nav className="flex-column sidebar-menu">
                <Link to="/">Add Apartment</Link>                                                                                   
                <Link to="/">Manage Apartments</Link>                                                                                   
            </Nav>
        </div>
    );
};

export default Sidebar;