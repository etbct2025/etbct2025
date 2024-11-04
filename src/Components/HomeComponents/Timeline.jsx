import { motion } from "framer-motion";

import "../../App.css";
// import Countdown from "./Countdown";

const Timeline = () => {
  return (
    <div className="timeline-section bg-sky-800   py-16 text-2xl">
      <div className="text-4xl font-bold text-white  ">
        <motion.h1
          className="text-center mb-10"
          nitial={{ x: -1000 }}
          whileInView={{ x: 0 }}
        >
          Important Dates{" "}
        </motion.h1>
      </div>
      <div className="timeline relative min-w-[1200px]  mx-auto after:content-[''] after:absolute after:h-full after:w-[6px] after:bg-[#fff] after:top-0 after:left-5 lg:after:left-1/2 after:rounded-xl ">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.05,
            },
          }}
          className="container left-container left-0 py-[10px] px-[50px] relative w-[400px] md:w-[450px] xl:w-3/6  lg:after:content-[''] lg:after:absolute lg:after:w-[16px] lg:after:h-[16px] lg:after:rounded-[50%] lg:after:top-[20px]    lg:after:-right-[11px] after:bg-[#fff] lg:before:hidden before:content-[''] before:absolute before:w-[16px] before:h-[16px] before:rounded-[50%] before:top-[20px] before:left-[16px] lg:before:-left-[5px] before:bg-[#fff] "
        >
          <div className="text-box  relative bg-[#fff] rounded-xl font-[15px]">
            <div className="flex justify-between ">
              <div className=" border-r-2 flex justify-center items-center w-4/6 xl:w-5/6 text-2xl px-2">
                Abstract Submission Open
              </div>
              <div className=" w-2/6 xl:w-1/6 flex flex-col justify-center items-center px-2">
                <div>12</div>
                <div className="font-bold text-orange-500">SEP</div>
                <div>2024</div>
              </div>
            </div>
            <span className=" hidden lg:block left-container-arrow h-0 w-0 absolute top-[13px] z-[1] border-[15px]  border-solid border-transparent border-l-[#fff]   -right-[29px] "></span>
            <span className="block lg:hidden right-container-arrow h-0 w-0 absolute top-[13px] z-[1] border-[15px]  border-solid border-transparent border-r-[#fff] -left-[29px]"></span>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.35,
            },
          }}
          className="container right-container  left:0 lg:left-1/2 py-[10px] px-[50px] relative w-[400px] md:w-[450px] xl:w-3/6 before:content-[''] before:absolute before:w-[16px] before:h-[16px] before:rounded-[50%] before:top-[20px] before:left-[15px] lg:before:-left-[5px] before:bg-[#fff]"
        >
          <div className="text-box  relative bg-[#fff] rounded-xl font-[15px]">
            <div className="flex justify-between ">
              <div className=" border-r-2 flex justify-center items-center w-4/6 xl:w-5/6 text-2xl px-2">
                Abstract Submission Last Date
              </div>
              <div className="w-2/6 xl:w-1/6 flex flex-col justify-center items-center px-2">
                <div>30</div>
                <div className="font-bold text-orange-500">NOV</div>
                <div>2024</div>
              </div>
            </div>
            <span className="right-container-arrow h-0 w-0 absolute top-[13px] z-[1] border-[15px]  border-solid border-transparent border-r-[#fff] -left-[29px]"></span>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.25,
            },
          }}
          className="container left-container left-0 py-[10px] px-[50px] relative w-[400px] md:w-[450px] xl:w-3/6      lg:after:content-[''] lg:after:absolute lg:after:w-[16px] lg:after:h-[16px] lg:after:rounded-[50%] lg:after:top-[20px]    lg:after:-right-[11px] after:bg-[#fff] lg:before:hidden  before:content-[''] before:absolute before:w-[16px] before:h-[16px] before:rounded-[50%] before:top-[20px] before:left-[16px] lg:before:-left-[5px] before:bg-[#fff]"
        >
          <div className="text-box  relative bg-[#fff] rounded-xl font-[15px]">
            <div className="flex justify-between ">
              <div className=" border-r-2 flex justify-center items-center w-4/6 xl:w-5/6 text-2xl px-2">
                Abstract acceptence
              </div>
              <div className=" w-2/6 xl:w-1/6 flex flex-col justify-center items-center px-2">
                <div>10</div>
                <div className="font-bold text-orange-500">DEC</div>
                <div>2024</div>
              </div>
            </div>
            <span className=" hidden lg:block left-container-arrow h-0 w-0 absolute top-[13px] z-[1] border-[15px]  border-solid border-transparent border-l-[#fff]   -right-[29px] "></span>
            <span className="block lg:hidden right-container-arrow h-0 w-0 absolute top-[13px] z-[1] border-[15px]  border-solid border-transparent border-r-[#fff] -left-[29px]"></span>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.35,
            },
          }}
          className="container right-container  left:0 lg:left-1/2 py-[10px] px-[50px] relative w-[400px] md:w-[450px] xl:w-3/6 before:content-[''] before:absolute before:w-[16px] before:h-[16px] before:rounded-[50%] before:top-[20px] before:left-[15px] lg:before:-left-[5px] before:bg-[#fff]"
        >
          <div className="text-box  relative bg-[#fff] rounded-xl font-[15px]">
            <div className="flex justify-between ">
              <div className=" border-r-2 flex justify-center items-center w-4/6 xl:w-5/6 text-2xl px-2">
                Conference Dates
              </div>
              <div className="w-2/6 xl:w-1/6 flex flex-col justify-center items-center px-2">
                <div>14-15</div>
                <div className="font-bold text-orange-500">FEB</div>
                <div>2025</div>
              </div>
            </div>
            <span className="right-container-arrow h-0 w-0 absolute top-[13px] z-[1] border-[15px]  border-solid border-transparent border-r-[#fff] -left-[29px]"></span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
