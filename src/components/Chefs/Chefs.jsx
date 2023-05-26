import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import './Chefs.css'
import { useNavigation } from 'react-router-dom';

const Chefs = () => {

    const [chefs, setChefs] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('https://hunger-s-solution-server-nosiba28.vercel.app/chefs')
            .then(res => res.json())
            .then(data => { setChefs(data); setLoader(false) })
            .catch(error => console.log(error))
    }, []);

    return (
        <div className='m-5'>
            <h2 className='text-center pt-5'>Our Chefs</h2>
            {/* For showing all of the available chefs */}
            <div className='chefs'>
                {
                    loader === true ? <Spinner animation="border" variant="secondary" /> : chefs.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }

            </div>
        </div>
    );
};

export default Chefs;