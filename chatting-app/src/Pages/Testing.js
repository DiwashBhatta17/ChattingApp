import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function TestingPage() {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-5'>
        
        <Link to='/login'>go roam around.</Link>
        <hr />
        <hr/>
        <button onClick={()=>navigate('/login')}>Button test</button>
      
    </div>
  )
}

export default TestingPage
