import React from 'react'
import Heading from '../interfaces/Heading'


const CustomHeading = (head:Heading) => {
  return (
    <div>
      <h1 className="text-3xl font-bold flex items-center gap-4">
        <div>
        <span className="text-gray-400 mr-2">{head.t1}</span>
        <span className="text-light-primary">{head.t2}</span>
        </div>
        <div className='line h-1 w-10 rounded-sm bg-black'></div>
    </h1>
    </div>
  )
}

export default CustomHeading
