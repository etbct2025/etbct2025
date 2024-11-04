import { motion } from "framer-motion";
// import cg_profile from "../../../public/keyPersons/cg.jpg"
import arvind from "../../../public/members/arvind.jpeg"
import vinod from "../../../public/members/vinod.jpeg"
import anil from "../../../public/members/anil.jpeg"
const CommitteeMembers = () => {
  return (
    <section className="chief-patron  px-8 md:px-16">
      <h1 className="text-3xl bg-sky-800 pl-5 text-white font-extrabold  mb-3 py-2">
        Conference Committee Members
      </h1>
      <div className="flex flex-wrap gap-10 sm:px-16 py-10   justify-center items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="border rounded-xl w-[300px] h-[350px]"
        >
          <div className="">
            <img
              className="rounded-t-xl  h-[250px] w-full sm:h-64 object-cover object-top"
              loading="lazy"
              src={vinod}
              alt=""
            />
          </div>
          <div className="pb-5">
            <h1 className="text-xl text-orange-500 text-center">
              Dr. Vinod Singh
            </h1>
            {/* <p className="text-lg text-center">Assistant Professor, SoBT</p> */}
            <p className="text-lg text-center">Co-Organizing Secretary</p>
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
              src={arvind}
              alt=""
            />
          </div>
          <div className="pb-5">
            <h1 className="text-xl text-orange-500 text-center">
              Mr. Arvind Kumar Yadav
            </h1>
            {/* <p className="text-lg text-center">Assistant Professor, SoBT</p> */}
            <p className="text-lg text-center">Co-Organizing Secretary</p>
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
              src={anil}
              alt=""
            />
          </div>
          <div className="pb-5">
            <h1 className="text-xl text-orange-500 text-center">
              Dr. Anil Kumar
            </h1>
            {/* <p className="text-lg text-center">Assistant Professor, SoBT</p> */}
            <p className="text-lg text-center">Co-Organizing Secretary</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitteeMembers;
