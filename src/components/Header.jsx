import React from 'react'

export default function Header({navigate}) {
  return (
    <nav className="fixed right-[-10px] bg-gradient-to-r from-yellow-300 to-green-500 z-1 w-2/5 h-8 flex justify-evenly rounded-xl gap-5">
        <button onClick={() => navigate("/main/reading")} className='hover:bg-lime-600 w-1/4 rounded-xl'>Reading</button>
        <button onClick={() => navigate("/main/writing")} className='hover:bg-lime-600 w-1/4 rounded-xl'>Writing</button>
        <button onClick={() => navigate("/main/grammar")} className='hover:bg-lime-300 w-1/4 rounded-xl'>Grammar</button>
    </nav>
  )
}
