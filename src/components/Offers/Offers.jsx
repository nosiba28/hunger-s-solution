import React from 'react';

const Offers = () => {
    return (
        <div className='m-5'>
            <h2 className='text-center pt-5'>Our Offered Recipe's Categories</h2>
            <div className='d-lg-flex justify-content-between m-5'>
                <div className='text-center'>
                    <img className='rounded rounded-circle' style={{ width: 150, height: 150 }} src="https://insanelygoodrecipes.com/wp-content/uploads/2022/03/Flatbread-Bolani-with-Green-Onions-and-Potatoes-1.jpg" alt="" />
                    <p>Appetizers</p>
                </div>
                <div className='text-center'>
                    <img className='rounded rounded-circle' style={{ width: 150, height: 150 }} src="https://i.pinimg.com/736x/af/ca/da/afcada3d19f1868d0ff89df967608ba1.jpg" alt="" />
                    <p>Vegetables</p>
                </div>
                <div className='text-center'>
                    <img className='rounded rounded-circle' style={{ width: 150, height: 150 }} src="https://eisamay.com/thumb/96050804/chicken-biryani-recipe-96050804.jpg?imgsize=240252&width=1200&height=900&resizemode=75" alt="" />
                    <p>Chicken</p>
                </div>
                <div className='text-center'>
                    <img className='rounded rounded-circle' style={{ width: 150, height: 150 }} src="https://fussfreeflavours.com/wp-content/uploads/2021/09/slow-cooker-beef-curry-featured.jpg" alt="" />
                    <p>Mutton</p>
                </div>
                <div className='text-center'>
                    <img className='rounded rounded-circle' style={{ width: 150, height: 150 }} src="https://media.istockphoto.com/id/1266593594/photo/indian-traditional-bengali-sweet-food-on-white-background.jpg?s=170667a&w=0&k=20&c=ExWHfBcCLswWB8s1piecDJJgbwe5DRkG8qxzyBunsUM=" alt="" />
                    <p>Dessert</p>
                </div>

            </div>
        </div>
    );
};

export default Offers;