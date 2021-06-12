import React from 'react';
import HeaderTop from '../Shared/HeaderTop/HeaderTop';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './Dashboard.css'
import Sidebar from '../Shared/Sidebar/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
    const email = sessionStorage.getItem("email");
    const name = sessionStorage.getItem("name");
    const photo = sessionStorage.getItem("photo");
    return (
        <>
            <HeaderTop />
            <Header />
            <div className="dashboard">
                <h1>Welcome to Dashboard</h1>
            </div>
            <div className="dashboard-area">
                <Container fluid className="p-0">
                    <Row>
                        <Col sm={12} md={3}>
                            <Sidebar />
                        </Col>
                        <Col sm={12} md={9}>
                            <div className="dashboard-top">                               
                                <img src={photo} alt="user avatar" width="50px"/>
                                <span>{name}</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;