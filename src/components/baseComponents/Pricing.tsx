import React from 'react';

const Pricing = ({ available, price }) =>
  available ? (
    <div className="text-[28px] font-extrabold leading-[42px] text-teal-950 flex">
      From<span className="font-inter">₹</span>
      {price}
    </div>
  ) : (
    <div className="text-center border rounded-[5px] border-emerald-200 w-[210px] h-[59px] bg-white py-[7px] px-[14px] text-teal-950 text-[14px] leading-[18px] font-medium font-inter">
      No stores selling this product near you
    </div>
  );

export default Pricing;
