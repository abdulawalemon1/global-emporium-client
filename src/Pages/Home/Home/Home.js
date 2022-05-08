import React from 'react';
import Banner from '../Banner/Banner';
import Charts from '../Charts/Charts';
import CustomerReview from '../CustomerReview/CustomerReview';
import IssueSection from '../IssueSection/IssueSection';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Charts></Charts>
            <CustomerReview></CustomerReview>
            <IssueSection></IssueSection>

        </div>
    );
};

export default Home;