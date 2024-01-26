import React, { useState } from 'react'
import Question from '../components/Question';
import { StateContextCustom } from '../Context/StateContext';

const Home = () => {
    const {state:{questionsList},search} = StateContextCustom()
  return (
    <div className='flex justify-center home'>
      <div className="w-[1000px]">
        {
            questionsList.length>1? (
              questionsList.map((question)=>{
                return (
                    <Question key={question.questionNo} {...question} />
                )
              }
            )
            ):(
              search?(
                <div className="flex justify-center items-center"><h1 className='text-3xl mt-[250px] text-red-500 font-bold'>There is no data about {search}</h1></div>
              ):(
                <div className="flex justify-center items-center"><h1 className='text-3xl mt-[250px] text-red-500 font-bold'>ခေတ္တစောင့်ပါ...</h1></div>
              )
            )
        }
      </div>
    </div>
  )
}

export default Home
