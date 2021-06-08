import React from 'react';
import './Counter.css';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';
import icon1 from '../../../images/counter-icon-1.png';
import icon2 from '../../../images/counter-icon-2.png';
import icon3 from '../../../images/counter-icon-3.png';
import icon4 from '../../../images/counter-icon-4.png';


const Counter = () => {
    return (
        <div className="counter">
            <Container>
                <Row>
                    <Col md={4} xs={12}>
                        <div className="counter-left">
                            <h2>Counter</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ullam, aut laboriosam architecto quibusdam quasi.</p>
                        </div>
                    </Col>
                    <Col md={8} xs={12}>
                        <div className="counter-area">
                            <div className="single-counter">
                                <div className="counter-icon">
                                    <img src={icon1} alt="Conter icon" className="img-fluid"/>
                                </div>
                                <div className="connter-content">
                                    <CountUp start={0} end={900} duration={5} />
                                    <h4>Listings For Sale</h4>
                                </div>                        
                            </div>
                            <div className="single-counter">
                                <div className="counter-icon">
                                    <img src={icon2} alt="Conter icon" className="img-fluid"/>
                                </div>
                                <div className="connter-content">
                                    <CountUp start={0} end={900} duration={5} />
                                    <h4>Listings For Rent</h4>
                                </div>                        
                            </div>
                            <div className="single-counter">
                                <div className="counter-icon">
                                    <img src={icon3} alt="Conter icon" className="img-fluid"/>
                                </div>
                                <div className="connter-content">
                                    <CountUp start={0} end={100} duration={5} />
                                    <h4>Agents</h4>
                                </div>                        
                            </div>
                            <div className="single-counter">
                                <div className="counter-icon">
                                    <img src={icon4} alt="Conter icon" className="img-fluid"/>
                                </div>
                                <div className="connter-content">
                                    <CountUp start={0} end={100} duration={5} />
                                    <h4>Brokers</h4>
                                </div>                        
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default Counter;