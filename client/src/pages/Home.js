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
          <a href="https://github.com/Ryan-Thrall" target="_blank" rel="noopener noreferrer"><GitHub className="icon" sx={{ fontSize: "5rem" }} /></a>
          <a href="https://www.linkedin.com/in/ryan-thrall/" target="_blank" rel="noopener noreferrer"><LinkedIn className="icon" sx={{ fontSize: "5rem" }} /></a>
          <a href="mailto: ryanthrall04@gmail.com" target="_blank" rel="noopener noreferrer"><Email className="icon" sx={{ fontSize: "5rem" }} /></a>
          <a href="tel:2086154465" target="_blank" rel="noopener noreferrer"><Phone className="icon" sx={{ fontSize: "5rem" }} /></a>
        </div>
      </div>

    </div>

  )
}

export default Home
