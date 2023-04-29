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
          <div className=" md:hidden ml-4 [&>*]:mr-4 sm:hidden lg:block">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses</span>
            <span>Scoot...</span>
            <span>vehic...</span>
            <span>For Rent: House</span>
          </div>
        </div>
        <div className="md:relative md:w-full sm:relative">
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
