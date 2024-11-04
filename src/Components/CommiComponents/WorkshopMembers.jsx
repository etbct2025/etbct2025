// import cg_profile from "../../../public/keyPersons/cg.jpg"
import rakesh from "../../../public/members/yadav.jpeg";
import raju from "../../../public/members/raju.jpeg";
import preeti from "../../../public/members/preeti.png";
import { motion } from "framer-motion";
const WorkshopMembers = () => {
  return (
    <section className="chief-patron  px-8 md:px-16">
      <h1 className="text-3xl bg-sky-800 pl-5 text-white font-extrabold  mb-3 py-2">
        Workshop Committee
      </h1>
      <div className="flex flex-wrap gap-10 sm:px-16 py-10   justify-center items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="border rounded-xl w-[300px] h-[350px]"
        >
          <div className="">
            <img
              className="rounded-t-xl  h-[250px] w-full sm:h-64 object-cover object-center"
              loading="lazy"
              src={rakesh}
              alt=""
            />
          </div>
          <div className="pb-5">
            <h1 className="text-xl text-orange-500 text-center">
              Dr. Rakesh Kumar
            </h1>
            {/* <p className="text-lg text-center">Assistant Professor, SoBT</p> */}
            <p className="text-lg text-center">Workshop Co-Coordinator</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="border rounded-xl w-[300px] h-[350px]"
        >
          <div className="">
            <img
              className="rounded-t-xl  h-[250px] w-full sm:h-64 object-cover object-top"
              loading="lazy"
              src={raju}
              alt=""
            />
          </div>
          <div className="pb-5">
            <h1 className="text-xl text-orange-500 text-center">
              Dr. Raju Shankarayan
            </h1>
            {/* <p className="text-lg text-center">Assistant Professor, SoBT</p> */}
            <p className="text-lg text-center">Workshop Co-Coordinator</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="border rounded-xl w-[300px] h-[350px]"
        >
          <div className="">
            <img
              className="rounded-t-xl  h-[250px] w-full sm:h-64 object-cover object-center"
              loading="lazy"
              src={preeti}
              alt=""
            />
          </div>
          <div className="pb-5">
            <h1 className="text-xl text-orange-500 text-center">
              Dr. Preeti Sharma
            </h1>
            {/* <p className="text-lg text-center">Assistant Professor, SoBT</p> */}
            <p className="text-lg text-center">Workshop Co-Coordinator</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkshopMembers;
