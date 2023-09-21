import React from 'react'

function Home() {
  return (
    <div className="grid grid-cols-2">
      <div className="left text-blue-600 flex justify-center">Hello</div>
      <div className="right flex justify-center">
        <div className="imageWrapper">
          <img src="../ryan_image.jpg" alt="Ryan" className="ryanImage" />
        </div>
      </div>
    </div>
  )
}

export default Home
