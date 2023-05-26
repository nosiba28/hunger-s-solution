import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className='text-center m-5'>
      <Carousel>

        <Carousel.Item interval={700}>
          <img
            className="d-block w-100 rounded rounded-100"
            style={{ height: 500 }}
            src="https://www.vividcandi.com/wp-content/uploads/2017/07/ThinkstockPhotos-500228390.jpg"
          />
          <Carousel.Caption>
            <h3>Cook with love, serve with passion</h3>
            <p>Importance of putting care and attention into the food you prepare, and then sharing it with others with enthusiasm and joy. It also suggests that cooking can be a creative and expressive act that allows you to share your personality and emotions through the food you make.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <img
            className="d-block w-100 rounded rounded-100"
            style={{ height: 500 }}
            src="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2015/02/chef-kzenon-shutterstock_390054868.jpg"
          />
          <Carousel.Caption>
            <h3>Keep it simple, let the ingredients shine</h3>
            <p>Using fresh, high-quality ingredients and allowing their natural flavors to be the star of the dish. It also suggests that cooking doesn't have to be complicated or overly fussy - sometimes the simplest recipes are the best.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 rounded rounded-100"
            style={{ height: 500 }}
            src="https://i.ytimg.com/vi/8T9wsQfl8_M/maxresdefault.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Nourish your body, delight your senses.</h3>
            <p>Creating dishes that not only taste good, but are also good for you. It encourages the use of fresh, whole ingredients and balanced, nutritious meals that provide energy and nourishment.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 rounded rounded-100"
            style={{ height: 500 }}
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?cs=srgb&dl=pexels-pixabay-262978.jpg&fm=jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Passion on a plate.</h3>
            <p>
              Cooking isn't just about following a recipe or preparing a meal, but about expressing creativity and passion through food.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default Banner;