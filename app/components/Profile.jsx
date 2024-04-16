"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Profile = () => {
  return (
    <section className="min-h-screen flex flex-col gap-10 lg:gap-20 justify-center items-center lg:flex-row">
      <div className="lg:w-[40vw] flex justify-end items-center">
        <div className="box size-[265px] md:size-[315px] lg:size-[365px] flex items-center justify-center">
          <img
            src="/images/user.svg"
            alt="John Lester Escarlan's Profile Picture"
            className="z-10  size-[250px] md:size-[300px] lg:size-[350px] border-2 border-3-1000 rounded-full"
          />
        </div>
      </div>
      <div className="lg:w-[50vw] flex flex-col justify-center gap-4 items-center lg:items-start">
        <h1 className=" flex flex-col items-center lg:items-start font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
          <span>Hey, I'm </span>
          <TypeAnimation
            sequence={[
              "Lester",
              1000,
              "Data Analyst",
              1000,
              "Web Designer",
              1000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
            className="text-3-1000"
          />
        </h1>
        <p className="lg:w-[40vw] text-justify text-base ">
          Embark on a journey with me as I bring my unwavering passion for data
          analytics to the forefront. Delving into the intricate world of data,
          I strive to unravel its hidden stories and harness its potential to
          drive impactful decisions. Join me in exploring the art of data
          analysis, where every insight uncovered is a testament to my
          dedication to this captivating field.
        </p>

        <div className="flex flex-col sm:flex-row gap-2">
          <button className="px-5 py-3 w-[80vw] sm:w-fit font-bold text-xs uppercase tracking-wider rounded-full bg-3-1000 hover:bg-3-900 hover:scale-105  transition ease-in-out duration-200 hover:bg-left-bottom text-1">
            Download CV
          </button>
          <button className="px-5 py-3 w-[80vw] sm:w-fit font-bold text-xs uppercase tracking-wider rounded-full bg-3-1000 hover:bg-3-900 hover:scale-105  transition ease-in-out duration-200 hover:bg-left-bottom text-1">
            Contact Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
