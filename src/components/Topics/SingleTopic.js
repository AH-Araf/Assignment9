import React from 'react';

const SingleTopic = ({quiz}) => {
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
        </div>
    );
};

export default SingleTopic;