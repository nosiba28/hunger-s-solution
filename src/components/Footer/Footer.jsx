import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <Container className='mw-100 bg-dark my-5'>
            <div className='d-lg-flex justify-content-between my-5'>
                <div className='text-white p-5 my-2 border border-secondary'>
                    <h5 className='my-2'>Subscribe</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur<br></br> adipisicing elit. Pariatur illo voluptatum <br></br>expedita possimus totam reiciendis sunt quibusdam<br></br> nobis commodi nemo.
                    </p>
                    <Form className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <Form.Control className='h-300' type="email" placeholder="Please enter email address" />
                        </Form.Group>
                        <Button variant="secondary">Submit</Button>
                    </Form>

                </div>
                <div className='text-white p-5 my-2 border border-secondary'>
                    <h5>Explore</h5>
                    <p>Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. Deleniti, voluptatem?</p>
                    <ul>
                        <li>Chefs</li>
                        <li>Latest Foods</li>
                        <li>Updated Foods</li>
                        <li>Popular Foods</li>
                        <li>What's about Your recipe?</li>
                    </ul>
                </div>
                <div className='text-white p-5 my-2 border border-secondary'>
                    <h5>Contact</h5>
                    <p><FontAwesomeIcon icon={faLocationDot} /> <span>324 New Market Street <br /> Dhanmondi, Dhaka</span></p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> <span>nsb12345@gmail.com</span></p>
                    <p><FontAwesomeIcon icon={faPhone} /><span>0190000000</span></p>
                </div>
            </div>
        </Container>
    );
};

export default Footer;