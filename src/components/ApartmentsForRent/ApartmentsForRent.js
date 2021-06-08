import React from 'react';
import HeaderTop from '../Shared/HeaderTop/HeaderTop';
import Header from '../Shared/Header/Header';
import Apartments from '../Home/Apartments/Apartments';
import Footer from '../Shared/Footer/Footer';

const ApartmentsForRent = () => {
    return (
        <div className="apt-rent">
            <HeaderTop></HeaderTop>
            <Header></Header>
            <Apartments></Apartments>
            <Footer></Footer>
        </div>
    );
};

export default ApartmentsForRent;