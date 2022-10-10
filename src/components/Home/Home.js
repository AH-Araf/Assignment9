import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'


const Home = () => {
    const quiz = useLoaderData();
    return (
        <div>
            <div className='img-write'>
            <div className='text'>
                    <i><h1>Welcome, This is Araf's Quiz Zone</h1>
                    <h2>Select your topic</h2></i>
                </div>
                <div>
                    <img src="./images/A.jpg" alt="" />
                </div>   
            </div>

            <div>
                <p>dfgdfg:{quiz.length}</p>
            </div>
        </div>
    );
};

export default Home;