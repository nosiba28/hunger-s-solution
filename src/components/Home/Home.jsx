import React from 'react';
import Banner from '../Banner/Banner';
import { Button, Form } from 'react-bootstrap';
import Chefs from '../Chefs/Chefs';
import Offers from '../Offers/Offers';
import PopularRecipe from '../PopularRecipe/PopularRecipe';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Form className='d-flex justify-content-center mx-3 my-4'>
                <Form.Group className="" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control className='w-100 p-3' type="text" placeholder="Search your recipe..." />
                </Form.Group>
                <Button variant="secondary"><Link style={{ textDecoration: 'none', color: 'white' }} to="/myrecipes">Search</Link></Button>
            </Form>
            <Banner></Banner>
            <Chefs></Chefs>
            <Offers></Offers>
            <PopularRecipe></PopularRecipe>
        </div>
    );
};

export default Home;