import React from 'react';
import { Container, Row } from 'react-bootstrap';
import data from '../../../data.json';
import Apartment from '../Apartment/Apartment';
import './Apartments.css'

const Apartments = () => {
    return (
        <div className="apartments">
            <Container>
                <div className="section-heading">
                    <h2>Discover Our Apartment</h2>
                </div>
                <Row>
                    {
                        data.map(ap => <Apartment key={ap.id} ap={ap}></Apartment> )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Apartments;