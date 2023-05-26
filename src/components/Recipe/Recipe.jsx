import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import OneRecipe from '../OneRecipe/OneRecipe';
import './Recipe.css'
import LazyLoad from 'react-lazyload';

const Recipe = () => {

    const chef = useLoaderData();
    const { id, picture, name, experience, num_recipes, likes, description, recipes } = chef;

    return (
        <div>
            <div className='d-lg-flex justify-content-between'>
                {/* <h2>THis is recipe page : {name}</h2> */}
                <div className='m-4'>
                    <LazyLoad height={400} width={400} offset={300} threshold={0.95}>
                        <img src={picture} className='' style={{ width: 400, height: 400 }} alt="" />
                    </LazyLoad>
                </div>
                <div className='m-4'>
                    <h4> {name}</h4>
                    {description}<br></br>
                    <FaThumbsUp></FaThumbsUp> {likes}<br></br>
                    Number of recipes: {num_recipes}<br></br>
                    Experience: {experience} years<br></br>
                </div>
            </div>
            <div className='text-center m-4'>
                <h3>{name}'s Recipes</h3>
                <div className='recipes'>
                    {
                        recipes.map(recipe => <OneRecipe
                            key={recipe.recipe_id}
                            recipe={recipe}
                        ></OneRecipe>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipe;