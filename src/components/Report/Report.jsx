import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import "./Report.scss"

function Report() {
  return (
    <div className='main d-flex position-relative'>
      <Navbar />
      <div className='main__data col-9'>
        <Header />
        <div className='student'>
          <h2 className='student__title'>
            Hisobot holati
          </h2>
          
        </div>
      </div>
    </div>
  )
}

export default Report
