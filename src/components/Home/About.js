import React from "react";
import image from "../../assets/images/profile (2).png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 bg-blueGray-200 lg:mt-54 mt-80"
    >
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-accent w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div>
                  <img
                    alt="..."
                    src={image}
                    className="h-auto rounded-lg  align-middle border-none absolute -m-20 -ml-[98px] lg:-ml-[100px] w-48 lg:w-52  "
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div className="py-6 px-3 mt-32 sm:mt-0 flex justify-center">
                  <button className="btn btn-sm lg:btn-md btn-outline text-primary hover:bg-primary hover:text-[#0A192F]">
                    Connect
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/AhesanToha"
                    >
                      <FaGithub className="text-3xl text-primary hover:text-white" />
                    </a>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/AhesanToha/"
                    >
                      <FaLinkedin className="text-3xl text-primary hover:text-white" />
                    </a>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/AhesanToha"
                    >
                      <FaFacebook className="text-3xl text-primary hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12 text-white">
              <h3 className="text-4xl font-semibold leading-normal mb-2">
                M. Ahesanul Hoque Toha
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-primary font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Chattagram, Bangladesh
              </div>
              <div className="mb-2 text-primary mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Learner - Programming Hero
              </div>
              <div className="mb-2 text-primary">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                Student - Hazera Taju Degree College, Chattagram
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-white">
                    I am well positioned to maximize my abilities and
                    qualifications to grow as Tesla's next Front-end Developer
                    as a passionate and creative technologist with hands-on
                    experience in a wide range of web tools and programming
                    languages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
