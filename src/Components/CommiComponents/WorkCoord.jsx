import sharada from "../../../public/members/sharada.jpeg";
const WorkCoord = () => {
  return (
    <section className="chief-patron px-8 md:px-16">
      <h1 className="text-3xl bg-sky-800 pl-5 text-white font-extrabold  mb-3 py-2">
        Workshop Coordinator
      </h1>

      <div className="flex flex-col md:flex-row  gap-y-5 md:gap-x-5  gap-x-5  py-10">
        <div className="    flex   justify-center md:justify-start  w-full md:w-2/6   ">
          <img
            className=" w-64 h-64 md:w-96 md:h-96 rounded-xl object-cover "
            loading="lazy"
            src={sharada}
            alt="cg_profile"
          />
        </div>
        <div className="w-full md:w-4/6  flex flex-col gap-y-3 justify-start">
          <h1 className="text-2xl text-orange-500 font-bold">
            Dr. Sharada Potukuchi
          </h1>
          {/* <h3 className='text-xl font-bold'>Associate Professor, School of Biotechnology</h3> */}
          <p className="text-lg text-justify">
            Dr. Sharada Potukuchi, Associate Professor and former Head of the
            School of Biotechnology at Shri Mata Vaishno Devi University, Katra,
            J&K, has served as the Dean of Academic Affairs at the university.
            Dr. Potukuchi specializes in Plant Tissue Culture for Secondary
            Metabolite Production and Genetic Engineering. She completed her
            Ph.D. in Botany from Punjab University and conducted post-doctoral
            research at the University of KwaZulu-Natal, South Africa. Her
            expertise includes bioactive phytochemical production,
            micropropagation, medicinal plant conservation, and bioreactor
            applications. Dr. Potukuchi has authored two books, published over
            50 research papers, and presented at 80 conferences globally. She
            has supervised numerous Ph.D., M.Sc., and B.Tech. students. Her
            notable work includes tissue cultures of various medicinal plants
            and bioinformatics contributions. Awards she has received include
            the Fellow Award (2011) and International Plant Scientist Award
            (2016). She is also a Councilor for The Orchid Society of India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkCoord;
