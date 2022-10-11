import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({quiz}) => {
    const {name, logo, total, id} = quiz;
    return (
        <div className='all-quiz'>
            <img src={logo} alt="" />
            <div className='topics-details'>
                <div className='a'>
                    <p>{name}</p>
                </div>
                <div>
                    <p>Total Question: {total}</p>
                </div>
            </div>
            <div>
                <button className='btn-design'><Link to={`/quiz/${id}`}>Start Quiz</Link></button>
            </div>
        </div>
    );
};

export default Topic;