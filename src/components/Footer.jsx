import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
   
    <div>
      {/* <div>
      <hr/>
      </div> */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo3} className="mb-5 w-80" alt="" />
          <p className="w-full md:w:-2/3 text-gray-600">
            Shop smarter with TrendHive—quality, style, and unbeatable savings
            guaranteed!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Terms and Conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600"></ul>
          <li>+91-9369983107</li>
          <li>pratiktripathi198@gmail.com</li>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ TrendHive—quality.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
