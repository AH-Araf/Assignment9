import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee,  faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quiz.css'

const Quiz = ({solve}) => {
    const {correctAnswer} = solve;

    const a =() => toast(correctAnswer);

    return (
        <div>
            <div className='dis-flex'>
                <p className='question-set'>{solve.question}</p>
                <FontAwesomeIcon onClick={a} icon={faEye}></FontAwesomeIcon>
                <ToastContainer/>
            </div>

            <div>
                <div className='option-color'>
                {solve.options[0]}
                </div>

                <div className='option-color'>
                {solve.options[1]}
                </div>

                <div className='option-color'>
                {solve.options[2]}
                </div>

                <div className='option-color'>
                {solve.options[3]}
                </div>
            </div>
        </div>
    );
};

export default Quiz;