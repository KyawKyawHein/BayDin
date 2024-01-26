import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import baydin from '../assets/bd.png'
import { StateContextCustom } from '../Context/StateContext'

const Nav = () => {
    const { state: { questionsList }, dispatch, search, setSearch } = StateContextCustom()

    return (
        <div className='p-3 shadow shadow-lg flex justify-around items-center'>
            <div className="flex items-center gap-2">
                <img src={baydin} alt="bay" className='w-[50px] rounded rounded-2xl' />
                <Link to={'/Baydin'}>
                    <h2 className='text-blue-400 text-2xl select-none text-center'>ဗေဒင်</h2>
                </Link>
            </div>
            <div className="min-[300px]:hidden sm:block">
                <input type="text" className='text-black p-2 border-gray-500 outline-gray-500 border-none' name='search' onChange={(e) => setSearch(e.target.value)} />
            </div>
        </div>
    )
}

export default Nav
