import React from 'react';

const SingleQuiz = ({quiz}) => {
    const {data, total} = quiz;
    return (
        <div>
            <p>{total}</p>
        </div>
    );
};

export default SingleQuiz;