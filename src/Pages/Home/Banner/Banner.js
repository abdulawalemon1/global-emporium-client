import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import car1 from '../../../images/car-banner1.jpg'
import car2 from '../../../images/car-banner2.jpg'
import car3 from '../../../images/car-banner3.jpg'
import car4 from '../../../images/car-banner4.jpg'
import car5 from '../../../images/car-banner5.jpg'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={car5}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Global Emporium</h3>
                        <p>Car Inventory</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={car2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to Global Emporium</h3>
                        <p>Manage your collection in Manage Item page</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={car3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to Global Emporium</h3>
                        <p>
                            Add new product in Add Item page.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={car4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to Global Emporium</h3>
                        <p>
                            Update Stock in Manage Inventory
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;