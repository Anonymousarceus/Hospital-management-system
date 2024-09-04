import React from "react";
import maskImage from '../assets/images/mask.png';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';

const Home = () => {
  return (
    <>
      <section
        className="hero__section"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 150, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${maskImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop: "60px",
          height: "800px",
        }}
      >
        <div className="container">
          <div className="flex items-center lg:items-start justify-between">
            <div className="flex flex-col items-center lg:items-start lg:w-[570px] mx-auto lg:mx-0">
              {/* Hero Content */}
              <div>
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]" style={{ color: "#2d3748" }}>
                  We help patients live a healthy and longer life
                </h1>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "30px",
                    fontWeight: 400,
                    color: "#4a5568", // Dark gray color to match the reference
                    marginTop: "18px",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat provident autem dignissimos adipisci facere voluptatibus laboriosam quod nesciunt impedit corporis nihil laudantium sequi, labore mollitia non rerum eos veniam?
                </p>

                <button
                  className="text-white font-semibold"
                  style={{
                    backgroundColor: "#3490dc", // Blue color to match the button
                    padding: "15px 35px",
                    borderRadius: "50px",
                    marginTop: "38px",
                  }}
                >
                  Request an Appointment
                </button>
              </div>

              {/* Hero Counter */}
              <div className="mt-[30px] flex flex-col lg:flex-row items-center gap-5 lg:gap-[30px]">
                <div className="text-center lg:text-left">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                  <p>Hospitals Connected</p>
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                  <p>Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Image Collage */}
            <div className="relative hidden lg:block w-[300px] h-[400px]">
              <img src={heroImg01} alt="Hero Image" className="absolute top-0 right-60 w-[300px] h-[410px] object-cover" />
              <img src={heroImg02} alt="Hero Image" className="absolute top-[1px] right-0 w-[220px] h-[220px] object-cover" />
              <img src={heroImg03} alt="Hero Image" className="absolute top-[230px] right-2 w-[210px] h-[180px] object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
