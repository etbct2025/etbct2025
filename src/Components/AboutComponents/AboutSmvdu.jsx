import { motion } from "framer-motion";
import smvdu_image from "../../../public/Gallery/university.jpg";
const AboutSmvdu = () => {
  return (
    <div className="flex  flex-col md:flex-row-reverse gap-10">
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        className="w-full md:w-3/6 flex justify-center items-start"
      >
        <img
          className="rounded-xl md:h-[500px] object-cover"
          loading="lazy"
          src={smvdu_image}
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        className="w-full md:w-3/6 flex flex-col  gap-y-5"
      >
        <h1 className="text-2xl text-orange-500 font-bold  ">About SMVDU</h1>

        <p className="text-lg text-justify">
          Shri Mata Vaishno Devi University (SMVDU), established in 1999 under
          an Act of the J&K State Legislature, is a fully residential and
          technical university recognized by the UGC under Sections 2(f) and
          12(B) of the UGC Act of 1956. Funded by the UGC, SMVDU ranked 26th in
          Architecture, 101-150 in Engineering, and 151-200 among top
          universities in NIRF 2024. The university is home to several dedicated
          Research Centres, specializing in various fields with significant
          funding from the UGC and DBT. These centres, along with a
          state-of-the-art Bioinformatics Facility, are central to SMVDU's
          research endeavors, driving advancements across diverse disciplines.
          SMVDU offers a comprehensive learning environment with modern
          facilities, including a well-stocked library, advanced computer labs,
          and cutting-edge research centres. Faculty development programs ensure
          that educators remain enriched with the latest innovations, while
          extracurricular activities, sports, and student clubs promote holistic
          development. This combination of academic excellence, dedicated
          faculty, and a supportive environment enables SMVDU students to excel
          and thrive in their chosen fields.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutSmvdu;
