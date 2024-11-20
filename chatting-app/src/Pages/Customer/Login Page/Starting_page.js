import React, { useState } from 'react'
import Signuppopup from './Signuppopup'
import Loginpopup from './Loginpopup';

function Starting_page() {

  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <>
    <div className='flex flex-col gap-2 text-white bg-[#283c3b] justify-center items-center h-screen'>

        <div className="text-[#fff] text-2xl ">Create the username <button onClick={()=>setSignup(true)} className='text-[#86ba73]'>Here</button></div>
        <div className="">or,  Already have an account, <button onClick={()=>setLogin(true)} className='text-[#a5baf4]'>Login</button></div>

      
    </div>
    <Signuppopup signup={signup} setSignup={setSignup} />
    <Loginpopup login={login} setLogin={setLogin}/>
    </>
  )
}

export default Starting_page
