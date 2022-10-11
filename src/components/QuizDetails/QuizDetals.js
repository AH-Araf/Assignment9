import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './QuizDetails.css'


const QuizDetals = () => {
    const quiz = useLoaderData();
    console.log(quiz.data)
    let a = (quiz.data.questions);
    return (
        <div className='questions'>
            <h2 className='border'><span className='red'> Quiz Topic:</span> <span className='green'>{quiz.data.name}</span></h2>
            {
                a.map(b => <p
                 
                >
                    {b.question}
                    <div className='option-color'>
                        {b.options}
                    </div>
                </p>)
            },
            
        </div>
    );
};

export default QuizDetals;