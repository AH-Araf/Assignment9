import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { BarChart, Bar, Cell, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const [quiz, setQuiz] = useState([]);
    useEffect( ()=>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
            const dataLoaded = data.data.data; 
            // console.log(dataLoaded);
            const quizData = dataLoaded.map(quiz =>{
                const singleData ={
                    Name: quiz.name,
                    Quiz: quiz.total
                }
                return singleData;
            })
            // console.log(quizData)
            setQuiz(quizData);
        })
    } ,[])
    return (
        <div className='chart'>
          <ResponsiveContainer width="95%" height={500}>
        <LineChart
          width={400}
          height={300}
          data={quiz}
          margin={{
            top: 10,
            right: 80,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Name" />
          <YAxis dataKey="Quiz"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Name" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Quiz" stroke="red" />
        </LineChart>
        </ResponsiveContainer>
        </div>
    );
};
export default Statistics;