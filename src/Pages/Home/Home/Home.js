import React from 'react';
import Banner from '../Banner/Banner';
import IssueSection from '../IssueSection/IssueSection';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <IssueSection></IssueSection>

        </div>
    );
};

export default Home;