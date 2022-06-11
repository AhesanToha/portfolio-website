import React from "react";
import perfume from "../../assets/images/computer.png";
import mars from "../../assets/images/warehouse.png";
import photographer from "../../assets/images/Boast-net.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="my-7">
      <h2 className="text-center text-primary text-2xl my-10 ">
        ___Projects___
      </h2>
      <div>
        <div class=" flex items-center justify-center">
          <div class="grid lg:grid-cols-3 gap-8 px-12">
            <div class="flex flex-col gap-1">
              <a href="/" class="bg-primary">
                <img
                  alt=""
                  src={perfume}
                  class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </a>

              <a
                href="https://perfumes-warhouse.web.app/"
                class="hover:text-primary text-gray-200 font-semibold"
              >
                {" "}
                COMPUTER GARAGE
              </a>

              <span class="hover:text-purple-500 text-sm text-gray-400 -mt-1">
                 Manufacturer Company Website
              </span>

              <div class="flex flex-row flex-wrap gap-2">
                <a
                  href="https://github.com/AhesanToha/Computer-garage-client"
                  class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1"
                >
                  <FaGithub /> Client
                </a>
                <a
                  href="https://github.com/AhesanToha/Computer-Garage-server"
                  class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1"
                >
                  <FaGithub /> Server
                </a>
                <span class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1 cursor-pointer">
                  Details
                </span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <a href="/" class="bg-primary">
                <img
                  alt=""
                  src={mars}
                  class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </a>

              <a
                href="https://mars-technology-630b3.web.app/"
                class="hover:text-primary text-gray-200 font-semibold"
              >
                WAREHOUSE MANAGER
              </a>

              <span class="hover:text-purple-500 text-sm text-gray-400 -mt-1">
              Warehouse Management Website
              </span>

              <div class="flex flex-row flex-wrap gap-2">
                <a
                  href="https://github.com/AhesanToha/Warehouse-management-client"
                  class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1"
                >
                  <FaGithub /> Client
                </a>
                <a
                  href="https://github.com/AhesanToha/Warehouse-management-server"
                  class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1"
                >
                  <FaGithub /> Server
                </a>
                <span class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1 cursor-pointer">
                  Details
                </span>
              </div>
            </div>
            <div class="flex flex-col gap-1">
              <a href="/" class="bg-primary">
                <img
                  alt=""
                  src={photographer}
                  class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100"
                />
              </a>

              <a
                href="https://personal-wedding-photographer.web.app/"
                class="hover:text-primary text-gray-200 font-semibold"
              >
                BOAST-NET
              </a>

              <span class="hover:text-purple-500 text-sm text-gray-400 -mt-1">
                ISP Website
              </span>

              <div class="flex flex-row flex-wrap gap-2">
                <a
                  href="https://github.com/Fahadmohammad1/personal-photographer"
                  class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1"
                >
                  <FaGithub /> Client
                </a>
                <span class="hover:bg-gray-600 text-primary text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full flex gap-1 cursor-pointer">
                  Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
