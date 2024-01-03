import React from 'react'
import './PackagesStyle.css'
import Package from './Package/Package'

const Packages = ({PackagesInfo}) => {
  return (
    <section className='PackagesSection'>
        <div className='Container'>
                <Package PackagesInfo={PackagesInfo}></Package>
        </div>
    </section>
  )
}

export default Packages