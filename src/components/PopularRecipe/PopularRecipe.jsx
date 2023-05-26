import { Rating } from '@smastrom/react-rating';
import React from 'react';
import LazyLoad from 'react-lazyload';

const PopularRecipe = () => {
    return (
        <div className='m-5'>
            <h2 className='text-center pt-5'>Our Popular Recipes</h2>
            <div>
                <div className='d-lg-flex bg-light border rounded rounded-20 m-4'>
                    <div>
                        <LazyLoad height={300} width={300} offset={200} threshold={0.95}>
                            <img className='p-4 rounded rounded-10' style={{ width: 300, height: 300 }} src="https://i0.wp.com/pikturenama.com/wp-content/uploads/2020/10/Low-res-Sosrshe-Ilish-8.jpg?fit=1200%2C800&ssl=1" alt="" />
                        </LazyLoad>
                    </div>
                    <div className='p-4'>
                        <h4>Shorshe Ilish</h4>
                        <p>Shorshe Ilish is a traditional Bengali dish made with Hilsa fish and a mustard-based sauce. It is a delicacy in Bangladesh and is often served during special occasions.</p>
                        <h5>Chef Name: Rashidul Hasan</h5>
                        <Rating style={{
                            maxWidth: 150,
                        }} value={4.8} readOnly />
                    </div>
                </div>
                <div className='d-lg-flex bg-light border rounded rounded-20 m-4'>
                    <div>
                        <LazyLoad height={300} width={300} offset={200} threshold={0.95}>
                            <img className='p-4 rounded rounded-10' style={{ width: 300, height: 300 }} src="https://www.bengalsaroma.com/wp-content/uploads/2019/02/%E0%A6%95%E0%A6%BE%E0%A6%9A%E0%A7%8D%E0%A6%9A%E0%A6%BF-%E0%A6%AC%E0%A6%BF%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%A8%E0%A6%BF.png" alt="" />
                        </LazyLoad>
                    </div>
                    <div className='p-4'>
                        <h4>Biriyani</h4>
                        <p>Biriyani is a popular dish in Bangladesh and is made with long-grain rice, meat (usually chicken or beef), and spices. It is often served during special occasions and is a staple in Bengali cuisine.</p>
                        <h5>Chef Name: Kishwar Chowdhury</h5>
                        <Rating style={{
                            maxWidth: 150,
                        }} value={4.7} readOnly />
                    </div>
                </div>
                <div className='d-lg-flex bg-light border rounded rounded-20 m-4'>
                    <div>
                        <LazyLoad height={300} width={300} offset={200} threshold={0.95}>
                            <img className='p-4 rounded rounded-10' style={{ width: 300, height: 300 }} src="https://www.easycookingwithmolly.com/wp-content/uploads/2015/09/Chingri-Malai-Curry-1-480x480.jpg" alt="" />
                        </LazyLoad>
                    </div>
                    <div className='p-4'>
                        <h4>Chingri Malai Curry</h4>
                        <p>Chingri Malai Curry is a traditional Bengali dish made with prawns, coconut milk, and spices. It is a creamy and flavorful dish that is perfect for special occasions.</p>
                        <h5>Chef Name: Mahmudul Islam</h5>
                        <Rating style={{
                            maxWidth: 150,
                        }} value={4.7} readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularRecipe;