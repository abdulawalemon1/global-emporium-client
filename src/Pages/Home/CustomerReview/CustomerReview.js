import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const CustomerReview = () => {
    return (
        <div >
            <h1 className='text-center'>Customer Feedback</h1>
            <CardGroup className='container'>
                <Card>
                    <Card.Img variant="top" src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg" />
                    <Card.Body>
                        <Card.Title>Adam</Card.Title>
                        <Card.Text>
                            I bought BMW X6 and could not be more happier from Global Emporium!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="http://www.venmond.com/demo/vendroid/img/avatar/big.jpg" />
                    <Card.Body>
                        <Card.Title>Selina</Card.Title>
                        <Card.Text>
                            Definitely a right choice for huge collection of cars in their inventory!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg" />
                    <Card.Body>
                        <Card.Title>Zarin</Card.Title>
                        <Card.Text>
                            I bought Mercedes S-class the price and product was perfect.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default CustomerReview;