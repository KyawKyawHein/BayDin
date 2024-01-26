import React, { useEffect } from 'react'
import { StateContextCustom } from '../Context/StateContext'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Result = () => {
    const { state: { question, selectedNum, answersList }, dispatch } = StateContextCustom();
    const nav = useNavigate();
    const [filteredArr] = answersList.filter((answer) => answer.questionNo == question.questionNo && answer.answerNo == selectedNum);
    useEffect(()=>{
        if (!question && !selectedNum) {
            nav('/Baydin')
        }
    },[])    

    return (
        <div className='flex flex-col items-center scale-up-center'>
            <div className="question my-10 text-center">
                <span className='text-2xl text-orange-500'>မေးခွန်း</span>
                <h5 className='text-2xl mt-5 text-green-500 min-[300px]:p-3'>{question?.questionName}</h5>
            </div>
            <h1 className='text-2xl text-orange-500'>ရလဒ် :</h1>
            <h3 className="mt-5 text-2xl mb-10 min-[300px]:p-2 text-center">{filteredArr?.answerResult}</h3>
            <Button name={
                <Link to={'/Baydin'}>
                    ထပ်မေးမယ်
                </Link>
            }></Button>
        </div>
    )
}

export default Result
