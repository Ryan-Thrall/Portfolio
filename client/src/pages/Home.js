import React from 'react'

function Home() {
  return (
    <div className="grid grid-cols-2 h-screen items-center">
      <div className="grid grid-rows-3 h-fit items-center justify-center left text-white">
        <p className="my-0 font-semibold ms-24 montserrat text-blue text-3xl">Hello World!</p>
        <p className="my-2 font-semibold ms-24 montserrat text-blue text-4xl">I'm Ryan Thrall</p>
        <p className="my-4 font-semibold ms-24 montserrat text-blue text-5xl">A Full-Stack Web Developer</p>


      </div>
      <div className="right flex justify-center h-screen">
        <div className="ryanImage flex self-center"></div>
      </div>
    </div>
  )
}

export default Home
