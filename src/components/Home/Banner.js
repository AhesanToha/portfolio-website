import React from "react";
import { Link } from "react-router-dom";
import coding from "../../assets/images/coding.gif";

const Banner = () => {
  return (
    <div className="container mx-auto lg:px-10 px-3 lg:mb-0 mb-16">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={coding} class="w-50 lg:w-auto rounded-xl" alt="" />
          <div className="text-white lg:w-2/3">
            <p className="text-primary ">Hi, I'm Toha</p>
            <h1 class="lg:text-7xl text-4xl font-bold py-2">
              Junior Frontend Developer
            </h1>
            <p class="py-6">
              Skilled entry-level web developer with knowledge on how to create
              and manage websites. Dedicated and professional web developer with
              a love for innovative ideas. React Js, JavaScript, HTML, and CSS
              are all skills I have. Dedicated to learning new technologies and
              coding languages.My goal is to become an awesome full-stack
              developer.
            </p>
            <button class="btn btn-sm lg:btn-md btn-outline text-primary hover:bg-primary hover:text-[#0A192F]">
              <Link to="#about">Know More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
