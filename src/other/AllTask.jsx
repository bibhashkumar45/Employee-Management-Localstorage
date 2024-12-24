import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext);
 
    
  return (
    <div id="alltasks" className='flex flex-col p-5 bg-[#1c1c1c] rounded-lg gap-y-3  mt-10'>

<div  className=' flex justify-between  items-center p-3 w-full rounded-lg text-center bg-red-400 mb-2'>
  <h2 className='w-1/5 font-bold '>Employee name</h2>
  <h3 className='w-1/5 font-bold '>New Task</h3>
  <h4 className='w-1/5 font-bold '>Active Task</h4>
  <h4 className='w-1/5 font-bold '>Completed</h4>
  <h4 className='w-1/5 font-bold '>Failed</h4>
</div>


{userData.map((elem,idx)=>
{
   return <div  key={idx} className=' flex justify-between  items-center p-3 w-full rounded-lg text-center border-2 border-emerald-300'>
  <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
  <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
  <h4 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h4>
  <h4 className='text-lg font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h4>
  <h4 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h4>
</div>
})}
      
    </div>
  )
}

export default AllTask
