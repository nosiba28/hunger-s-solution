import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import { Link, useLoaderData } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Chef = ({ chef }) => {

    const { id, picture, name, experience, num_recipes, likes, description } = chef;
    return (
        <div>
            <Card className='m-3 p-4 bg-light' style={{ width: '19rem' }}>
                <LazyLoad height={'15rem'} width={'17rem'} offset={300} threshold={0.95}>
                    <Card.Img className='p-3 rounded rounded-10' variant="top" src={picture} style={{ width: '17rem', height: '16rem' }} />
                </LazyLoad>
                <Card.Body style={{ width: '17rem', height: '16rem' }}>
                    <Card.Title>Chef Name: {name}</Card.Title>
                    <Card.Text>
                        Years of experience: {experience}<br></br>
                        Numbers of recipes: {num_recipes}<br></br>
                        <FaThumbsUp /> {likes}<br></br>


                    </Card.Text>
                    <Button variant="secondary"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/${id}`}>View Recipes</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Chef;