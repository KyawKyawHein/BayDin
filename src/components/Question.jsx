import React from 'react'
import { Link } from 'react-router-dom';
import { StateContextCustom } from '../Context/StateContext';

const Question = (props) => {
    const { questionNo, questionName } = props;
    const { dispatch } = StateContextCustom();
    return (
        <>
            <div onClick={() => dispatch({ type: "addQuestionNo", payload: props })} className='flex gap-2 min-[300px]:items-start min-[300px]:my-2 md:px-2 sm:items-center scale-up-center'>
                <span className='bg-red-500 rounded-full px-2 min-[300px]:hidden sm:block'>{questionNo}</span>
                <Link to={'/Baydin/lucky-table'}>
                    <h1 className='text-white p-2 mb-2 rounded hover:bg-red-500'>{questionName}</h1>
                </Link>
            </div>
        </>
    )
}

export default Question
