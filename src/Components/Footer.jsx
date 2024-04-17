import React from 'react'

const Footer = () => {
  return (
    <div className=' flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className=' flex gap-6 font-lato text-gray-400'>
        <li>
          <a href="#">Youtube</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
      </ul>
      <div className=' flex gap-2'>
        <img className='loka' src="/public/ani.jpeg" alt="photo" />
        <div>
          <p className=' font-playfair font-thin'>Have Any Question?</p>
          <a className=" font-lato font-medium" href="#">Talk To a Specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer