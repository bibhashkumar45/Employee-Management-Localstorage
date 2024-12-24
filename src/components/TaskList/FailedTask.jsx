import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full w-[300px] bg-red-300 rounded-xl flex-shrink-0 p-6'>
    <div className='flex justify-between items-center '>
      <h3 className='bg-red-600 text-sm px-3 py-2 rounded'>{data.category}</h3>
      <h4 className='text-md'>{data.taskDate}</h4>
    </div>
    <h2 className='text-3xl font-semibold mt-4'>{data.taskTitle}</h2>
    <h3 className='text-0.5xl font-medium mt-2'>{data.taskDescription} </h3>

    <div className='flex justify-between mt-6 '>
            <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
            <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
        </div>

  </div> 
  )
}

export default FailedTask
