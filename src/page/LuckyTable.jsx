import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { StateContextCustom } from '../context/StateContext';

const LuckyTable = () => {
    const { state: { numbersList, question }, dispatch } = StateContextCustom()
    const nav = useNavigate();
    useEffect(()=>{
        if (!question) {
            nav('/Baydin')
        }
    },[])
    return (
        <div className='flex flex-col items-center scale-up-center'>
            <Link to={'/Baydin'}><Button name="နောက်သို့" /></Link>
            <div className="question my-5 text-center">
                <span className='text-3xl text-orange-500'>မေးခွန်း</span>
                <h5 className='text-2xl mt-3 text-green-400 min-[300px]:p-3'>{question?.questionName}</h5>
            </div>
            <h4 className='text-2xl my-4'>နှစ်သက်ရာဂဏန်းရွေးပါ</h4>
            <div className="flex justify-center gap-3 flex-wrap sm:p-5 min-[300px]:mx-1 md:w-[670px] mb-4">
                {
                    numbersList?.map((number, index) => {
                        return (
                            <Link to={'/Baydin/result'} key={index} onClick={() => dispatch({ type: "addSelectedNum", payload: number.eng })}>
                                <div className="flex justify-center items-center bg-red-500 w-[50px] h-[50px] hover:bg-white hover:text-black cursor-pointer rounded rounded-full">
                                    {number.myan}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LuckyTable
