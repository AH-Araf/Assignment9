import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quiz.css'

const Quiz = ({solve}) => {
    console.log(solve)
    const {correctAnswer, options} = solve;

    const a =() => toast(`Answer: ${correctAnswer}`);

    const justify = (id) => {
        options[id] === correctAnswer ? toast('right') : toast('wrong')
    }

    return (
        <div>
            <div className='dis-flex'>
                <p className='question-set'>Question: {solve.question}</p>
                <FontAwesomeIcon onClick={a} icon={faEye}></FontAwesomeIcon>
                <ToastContainer/>
            </div>


            <div>

                <div className="form-check">
                <input onClick={(id) => justify(id)}  className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">
                
                <div className='option-color'>
                {options[0]}
                </div>

                </label>
                </div>

                <div className="form-check">
                <input onClick={(id) => justify(id)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">
                
                <div className='option-color'>
                {options[1]}
                </div>

                </label>
                </div>

                <div className="form-check">
                <input onClick={(id) => justify(id)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">
                
                <div className='option-color'>
                {options[2]}
                </div>

                </label>
                </div>

                <div className="form-check">
                <input onClick={(id) => justify(id)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">
        
                <div className='option-color'>
                {options[3]}
                </div>

                </label>
                </div>

            </div>
        </div>
    );
};

export default Quiz;