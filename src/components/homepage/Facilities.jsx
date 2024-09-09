import React from "react";
import Image from "next/image";
import { RiHeartAdd2Fill } from "react-icons/ri";
import { GiEyeShield } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { FaHandHoldingHeart } from "react-icons/fa";
import { PiBone } from "react-icons/pi";

const Facilities = () => {
  return (
    <div
      className="relative w-full h-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(Facilities/bgimg.jpg)" }}
    >
      <div className="relative z-10 lg:grid lg:grid-cols-12 items-center justify-center w-full h-full p-8 text-center lg:mt-20 mt-10">
        <div className="col-start-2 col-span-10">
          {/* Title Section */}
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-3 bg-white rounded-full py-3 px-6 shadow-md lg:w-3/12">
              <RiHeartAdd2Fill className="text-blue-400 text-3xl" />
              <h1 className="text-blue-400 font-bold">Facilities We Have</h1>
            </div>
          </div>

          {/* Subtitle */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 pt-2">
            What Facilities We <br /> Provide
          </h2>
        </div>
      </div>

      {/* Facilities Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:pb-36 pb-32 pt-20 lg:px-10">
        {/* Skin Allergies */}
        <div className="lg:relative rounded-lg">
          {/* Show image only on large screens */}
          <Image
            src="/Facilities/fac1.jpg"
            alt="Skin Allergies"
            width={300}
            height={150}
            className="w-full hidden lg:block"
          />

          <div className="lg:absolute inset-0 flex justify-center items-center z-10">
            <div className="relative bg-white p-4 drop-shadow-2xl rounded-b-lg w-full md:w-80 lg:h-60 flex flex-col justify-center items-center transform lg:translate-y-1/2">
              <div className="flex items-center text-4xl justify-between">
                <GiEyeShield className="text-blue-500 mr-2" />
                <TiTick className="text-blue-500 bg-gray-300 rounded-full" />
              </div>
              <h2 className="text-xl font-semibold mb-2 pt-7">
                Skin Allergies
              </h2>
              <p className="text-base text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>

        {/* Piles Treatment */}
        <div className="lg:relative rounded-lg">
          {/* Show image only on large screens */}
          <Image
            src="/Facilities/fac2.jpg"
            alt="Piles Treatment"
            width={300}
            height={150}
            className="w-full hidden lg:block"
          />

          <div className="lg:absolute inset-0 flex justify-center items-center z-10">
            <div className="relative bg-white p-4 drop-shadow-2xl rounded-b-lg w-full md:w-80 lg:h-60 flex flex-col justify-center items-center transform lg:translate-y-1/2">
              <div className="flex items-center text-4xl justify-between">
                <FaHandHoldingHeart className="text-blue-500 mr-2" />
                <TiTick className="text-blue-500 bg-gray-300 rounded-full" />
              </div>
              <h2 className="text-xl font-semibold mb-2 pt-7">
                Piles Treatment
              </h2>
              <p className="text-base text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>

        {/* Diabetes Management */}
        <div className="lg:relative rounded-lg">
          {/* Show image only on large screens */}
          <Image
            src="/Facilities/fac3.jpg"
            alt="Diabetes Management"
            width={300}
            height={150}
            className="w-full hidden lg:block"
          />

          <div className="lg:absolute inset-0 flex justify-center items-center z-10">
            <div className="relative bg-white p-4 drop-shadow-2xl rounded-b-lg w-full md:w-80 lg:h-60 flex flex-col justify-center items-center transform lg:translate-y-1/2">
              <div className="flex items-center text-4xl justify-between">
                <PiBone className="text-blue-500 mr-2" />
                <TiTick className="text-blue-500 bg-gray-300 rounded-full" />
              </div>
              <h2 className="text-xl font-semibold mb-2 pt-7">
                Diabetes Management
              </h2>
              <p className="text-base text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
