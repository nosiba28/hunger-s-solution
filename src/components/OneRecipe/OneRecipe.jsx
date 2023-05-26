import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaHeart } from 'react-icons/fa';

const OneRecipe = ({ recipe }) => {
    let enable = false;
    const [tost, setTost] = useState(false);
    const { recipe_id, name, info, ingredients, cooking_method, rating } = recipe;
    const handleFavorite = () => {
        enable = true;
        console.log(enable);
        if (enable) {
            toast('The recipe is your favorite!');
            setTost(true);
        }
    }
    return (
        <div>
            <Card className='m-2 px-2 py-4 bg-light' style={{ width: '25rem', height: '55rem' }}>
                <Card.Body>
                    <Card.Title className='border border-2 px-3 py-4 rounded rounded-10'>Recipe Name: {name}</Card.Title>
                    <Card.Text className='mx-2'>
                        <div>
                            <span className='fs-5 fw-semibold'>Info:</span><br></br><span className='text-secondary'>{info}</span> <br></br>
                        </div>
                        <div>
                            <span className='fs-5 fw-semibold'>Ingredients:</span><br></br>
                            <span className='text-secondary'>{ingredients}</span>
                            <br></br>
                        </div>
                        <div>
                            <span className='fs-5 fw-semibold'>Cooking method:</span><br></br>
                            <span className='text-secondary'>{cooking_method}</span>
                            <br></br>
                        </div>

                        <div>
                            <span className='fs-5 fw-semibold'>Rating:</span>
                            <span className='text-secondary'>{rating} </span>

                            <Rating style={{
                                maxWidth: 150, marginLeft: "auto",
                                marginRight: "auto"
                            }} value={rating} readOnly />
                        </div>
                    </Card.Text>
                    <Button onClick={handleFavorite} variant="danger" name='fav' disabled={tost}><Link style={{ textDecoration: 'none', color: 'white' }} to="">Favorite <FaHeart></FaHeart></Link></Button>
                    <ToastContainer />
                </Card.Body>
            </Card>
        </div>
    );
};

export default OneRecipe;