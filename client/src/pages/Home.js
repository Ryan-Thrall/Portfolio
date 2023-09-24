import React from 'react';
import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';

function Home() {
  return (
    <div className="grid grid-cols-12 h-screen items-center">
      <div className="left flex flex-col h-full justify-center col-span-6">
        <p className="my-0 font-semibold ms-24 montserrat text-blue text-[40pt]">Hello World!</p>
        <p className="my-2 font-semibold ms-24 montserrat text-blue text-[48pt]">I'm <span className="text-white">Ryan Thrall</span></p>
        <p className="my-4 font-semibold ms-24 montserrat text-blue text-[64pt]">A <span className="text-white">Full-Stack Web Developer</span></p>


      </div>
      <div className="right h-screen flex flex-col justify-center items-center col-span-6">
        <div className="ryanImage"></div>

        <div className="flex justify-between w-8/12 pt-8">
          <GitHub className="icon" sx={{ fontSize: "5rem" }} />
          <LinkedIn className="icon" sx={{ fontSize: "5rem" }} />
          <Email className="icon" sx={{ fontSize: "5rem" }} />
          <Phone className="icon" sx={{ fontSize: "5rem" }} />
        </div>
      </div>

    </div>

  )
}

export default Home
