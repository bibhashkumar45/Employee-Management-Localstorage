import React from 'react'

const Header = (prob) => {

  const logoutUser=(()=>
  {
    localStorage.setItem('loggedInUser','');
    // window.location.reload();
    prob.changeUser("");

  });
  return (
    <div className='flex items-end justify-between'>
    <h1 className='text-2xl font-medium' >Hello<br/> <span className='text-3xl font-semibold'>Bibhash 👋 </span></h1>
    <button onClick={logoutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header
