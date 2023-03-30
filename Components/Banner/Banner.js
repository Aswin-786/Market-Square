import React from 'react';
import '../../index.css'
import './Banner.css';
import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="pt-16">
      <div className="">
        <div className="flex px-4 py-3 ">
          <div className="flex ">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow>
          </div>
          <div className=" flex ml-4 [&>*]:mr-4 sm:hidden">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="relative w-full sm:relative">
          <img
            className='w-full'
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Banner;