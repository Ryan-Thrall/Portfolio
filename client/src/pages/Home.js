import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { GitHub, LinkedIn, Email, Phone } from '@mui/icons-material';

function Home() {
  return (
    <div className="grid grid-cols-2 h-screen items-center">
      <div className="grid grid-rows-3 h-fit items-center justify-center left text-white">
        <p className="my-0 font-semibold ms-24 montserrat text-blue text-3xl">Hello World!</p>
        <p className="my-2 font-semibold ms-24 montserrat text-blue text-4xl">I'm Ryan Thrall</p>
        <p className="my-4 font-semibold ms-24 montserrat text-blue text-5xl">A Full-Stack Web Developer</p>


      </div>
      <div className="right h-screen flex flex-col justify-center items-center">
        <div className="ryanImage"></div>

        <div className="flex justify-between w-8/12">
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
