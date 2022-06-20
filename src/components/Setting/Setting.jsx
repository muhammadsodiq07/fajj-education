import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar';

function Setting() {
  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data col-9'>
        <Header />
        <div className='student'>
          <h2 className='student__title'>
            Sozlanma
          </h2>
         
        </div>
      </div>
    </div>
  )
}

export default Setting
