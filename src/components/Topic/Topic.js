import React from 'react';
import './Topic.css'

const Topic = ({quiz}) => {
    const {name, logo, total} = quiz;
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
                <button className='btn-design'>Start Quiz</button>
            </div>
        </div>
    );
};

export default Topic;