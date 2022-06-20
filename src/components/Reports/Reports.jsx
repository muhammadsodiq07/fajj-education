import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

function Reports() {
  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data col-9'>
        <Header />
        <div className='student'>
          <h2 className='student__title'>
            Hisobotlar
          </h2>
          
        </div>
      </div>
    </div>
  )
}

export default Reports
