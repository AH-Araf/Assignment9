import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopic from './SingleTopic';



const Topics = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <div className='display-flex'>
                {
                    data.map(quiz => <SingleTopic
                        key={quiz.id}
                        quiz={quiz}
                        ></SingleTopic>
                    )
                }
            </div>
        </div>
    );
};

export default Topics;