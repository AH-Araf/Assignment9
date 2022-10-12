import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './QuizDetails.css'


const QuizDetals = () => {
    const quiz = useLoaderData();
    // console.log(quiz.data)
    let quiz1 = (quiz.data.questions);
    
    
    return (
        <div className='questions'>
            <h2 className='border'><span className='red'> Quiz Topic:</span> <span className='green'>{quiz.data.name}</span></h2>
            
            <div>
            {
                quiz1.map (solve=> <Quiz
                key={solve.id}
                 solve={solve}
                ></Quiz>)
            }
            </div>


        </div>
    );
};

export default QuizDetals;




