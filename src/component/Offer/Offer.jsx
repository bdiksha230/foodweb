import React from 'react'
import offerone from '../assets/img/offer1.webp';
import offertwo from '../assets/img/offer2.webp'

const Offer = () => {
  return (
    <div>
        <div className="container-md">
      <div className="row">
        <div className="col-md-6">
            <img className="w-100" src={offerone} alt="" />
        </div>
        <div className="col-md-6">
            <img className="w-100" src={offertwo} alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Offer
