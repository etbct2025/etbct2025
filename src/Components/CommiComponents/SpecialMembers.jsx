/* eslint-disable react/no-unescaped-entities */
// import vc_profile from "../../../public/keyPersons/VC.jpg";
import ratna from "../../../public/members/ratna.jpeg";
import rasool from "../../../public/members/rasool.jpg";
import parvez from "../../../public/members/parvez.jpeg";

const SpecialMembers = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section className="chief-patron  px-8 md:px-16">
        <h1 className="text-3xl bg-sky-800 text-white font-extrabold  mb-3 pl-5 py-2">
          Organizing Secretary
        </h1>
        <div className="flex flex-col md:flex-row  gap-y-5 md:gap-x-5  gap-x-5 py-10">
          <div className="  flex justify-center md:justify-start  w-full md:w-2/6 ">
            <img
              className=" w-64 h-64 md:w-96 md:h-96 rounded-xl object-top"
              loading="lazy"
              src={ratna}
              alt="vc_profile"
            />
          </div>
          <div className="w-full md:w-4/6  flex flex-col gap-y-3 justify-start">
            <h1 className="text-2xl text-orange-500 font-bold">
              Dr. Ratna Chandra
            </h1>
            {/* <h3 className='text-xl font-bold'>Head, School of Biotechnology</h3> */}
            <p className="text-lg text-justify">
              {" "}
              Dr. Ratna Chandra, Associate Professor in the Department of
              Biotechnology at Shri Mata Vaishno Devi University, Katra, holds a
              B.Sc. in Botany from Miranda House, Delhi University, an M.Sc. in
              Molecular Biology and Biotechnology, and a Ph.D. from the National
              Research Center on Plant Biotechnology, IARI, Delhi. Her research
              focuses on plant genetic engineering, Bt transgenics, and organic
              agrobiotechnology. She also explores drug design through in silico
              studies, particularly for cancer and tuberculosis. Dr. Chandra's
              expertise lies in improving crop plants via genetic engineering
              with microbes and evaluating EGFR for cancer studies. She has
              qualified for ICAR-JRF, UGC/CSIR-NET, and JRF.
            </p>
          </div>
        </div>
      </section>
      <section className="chief-patron  px-8 md:px-16">
        <h1 className="text-3xl bg-sky-800 text-white font-extrabold  mb-3 pl-5 py-2">
          Co-Convener
        </h1>
        <div className="flex flex-col md:flex-row  gap-y-5 md:gap-x-5  gap-x-5 py-10">
          <div className="  flex justify-center md:justify-start  w-full md:w-2/6 ">
            <img
              className=" w-64 h-64 md:w-96 md:h-96 rounded-xl"
              loading="lazy"
              src={rasool}
              alt="vc_profile"
            />
          </div>
          <div className="w-full md:w-4/6  flex flex-col gap-y-3 justify-start">
            <h1 className="text-2xl text-orange-500 font-bold">
              Dr. Shafaq Rasool
            </h1>
            {/* <h3 className='text-xl font-bold'>Assistant Professor, School of Biotechnology</h3> */}
            <p className="text-lg text-justify">
              {" "}
              Dr. Shafaq Rasool, Assistant Professor at the School of
              Biotechnology, Shri Mata Vaishno Devi University. She has years of
              teaching and research experience, with a Ph.D. in Biotechnology
              from Guru Nanak Dev University and the Indian Institute of
              Integrative Medicine, Jammu. Her doctoral research focused on the
              identification, cloning, and expression of an enantioselective
              lipase gene from Bacillus pumilus. Dr. Rasool's technical
              expertise includes molecular biology techniques, protein
              purification, microbiology, biochemical assays, and
              bioinformatics. She has led several research projects funded by
              DST, CSIR, DBT, and UGC, exploring microbial diversity, novel
              enzymes, and bioactive molecules. Her ongoing projects include
              identifying thermo-stable enzymes and bioactive compounds from
              endophytic microorganisms.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-y-5 md:gap-x-5  gap-x-5 py-10">
          <div className="  flex justify-center md:justify-start  w-full md:w-2/6 ">
            <img
              className=" w-64 h-64 md:w-96 md:h-96 rounded-xl object-cover"
              loading="lazy"
              src={parvez}
              alt="vc_profile"
            />
          </div>
          <div className="w-full md:w-4/6  flex flex-col gap-y-3 justify-start">
            <h1 className="text-2xl text-orange-500 font-bold">
              Dr. Parvez Singh Slathia
            </h1>
            {/* <h3 className='text-xl font-bold'>Assistant Professor, School of Biotechnology</h3> */}
            <p className="text-lg text-justify">
              Dr. Parvez Singh Slathia, Assistant Professor in the Department of
              Biotechnology at Shri Mata Vaishno Devi University. His research
              focuses on bioinformatics for vaccine design, bioethanol
              production from lignocellulosic materials, and probiotic studies
              on lactic acid bacteria. He has led several externally funded
              projects, including molecular modeling of Cystathionine beta-lyase
              and exploring probiotic bacteria for enzyme production. His
              publications cover a range of topics from DNA vaccine design to
              bioethanol production and environmental studies. Dr. Slathia is a
              life member of several professional societies, including ISID and
              AFOB, and has traveled to multiple countries for academic and
              research purposes. He has qualified national-level exams like CSIR
              NET JRF and GATE.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialMembers;
