import React from 'react'
import Image from "next/image";
import Badge from "../Assets/badge.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const Banner = ({Title, SubTitle, Icon}) => {
  return (
    <div className='flex  justify-center py-20 px-5  font-semibold items-end text-center' >
      <div>

      <h1 className='text-2xl animate-pulse '>{Title}</h1>
      <p>{SubTitle}</p>
      </div>
      <FontAwesomeIcon className=' text-red-600  font-xl size-20' icon={faQuestion} beat />
    </div>
  )
}

export default Banner