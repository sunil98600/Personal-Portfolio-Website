import React from 'react'

const Header = () => {
  return (
    <div className="justify-center items-center min-h-screen" style={{width:"100%"}} >
  <div className="relative py-3 w-full max-w-5xl">
    <div className="relative px-4 py-10 shadow-lg sm:rounded-lg sm:p-20">
      <div className="text-center">
        {/* Name and Role */}
        <h1 className="text-4xl text-white font-bold mb-5">Sunil Satish Patil</h1>
        <p className="text-xl text-white">
          Full Stack Engineer | Java & JavaScript Enthusiast | Problem Solver
        </p>
      </div>
    </div>
  </div>
</div>


  )
}

export default Header
