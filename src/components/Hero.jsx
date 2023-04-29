import React from 'react'

const Hero = ({heroapi:{title,subtitle,bntext,img,sociallinks,videos}}) => {
  console.log(heroapi)
  return (
  <>
  <div>
    <div></div>
    <div>
      <div>
        <h1></h1>
        <h1></h1>
        <button></button>
        <div></div>
        <div></div>
        </div>
      <div>
        <img src="{img}" alt="hero-alt-img" />

      </div>
    </div>
  </div>
    </>
  )
}

export default Hero;



