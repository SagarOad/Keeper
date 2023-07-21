import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai';

const Card = ({heading, para}) => {


  return (
    <div className='m-3'>
        <div className='drop-shadow-md w-[300px] bg-white p-4'>
            <div className='flex justify-between'>
            <h1 className='text-[24px] text-[bg-slate-950] font-medium'>{heading}</h1>
            <button>
            <AiFillDelete className='text-red-600 text-[21px]' />
            </button>
            </div>
            <p className='text-[18px] mt-3'>{para}</p>
        </div>
    </div>
  )
}

export default Card