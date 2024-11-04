import { motion } from 'framer-motion';
import biotech from "../../../public/Gallery/img10.jpeg";
const AboutSobt = () => {
  return (
    <div className="flex  flex-col md:flex-row gap-10">
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        className="w-full md:w-3/6 flex justify-center items-start"
      >
        <img
          className="rounded-xl md:h-[500px] object-cover object-left"
          loading="lazy"
          src={biotech}
          alt=""
        />
      </motion.div>
      <motion.div
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        className="w-full md:w-3/6 flex flex-col  gap-y-5"
      >
        <h1 className="text-2xl text-orange-500 font-bold ">
          About School of Biotechnology
        </h1>
        <p className="text-lg  text-justify">
          School of Biotechnology was established with a vision to bring in
          quality of life through developing and imparting knowledge in the
          field of life-sciences and embracive technologies. Recognizing the
          growing impact of biotechnology education and research in the 21st
          century, the School of Biotechnology at SMVDU has placed due emphasis
          in the curriculum on interdisciplinary convergence in modern biology,
          engineering and technology, applied orientation, quantitative
          approach, practical training, awareness of the broader social,
          economic, environmental, ethical, legal and managerial issues in
          biotechnology. The Research carried out at School of Biotechnology is
          of international standards and has gained recognition worldwide
          because of quality publications in highly reputed scientific journals
          and participation in Research projects of International repute along
          with number of patents.
        </p>
      </motion.div>
    </div>
  );
}

export default AboutSobt