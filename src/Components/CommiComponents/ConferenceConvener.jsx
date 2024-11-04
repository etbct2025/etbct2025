import indu_profile from "../../../public/keyPersons/indubhusan.jpg";

const ConferenceConvener = () => {
  return (
    <section className="chief-patron  px-8 md:px-16">
      <h1 className="text-3xl bg-sky-800 pl-5 text-white font-extrabold  mb-3 py-2">
        Conference Convener
      </h1>

      <div className="flex flex-col md:flex-row  gap-y-5 md:gap-x-5  gap-x-5 py-10 ">
        <div className="   overflow-hidden flex justify-center md:justify-start w-full md:w-2/6   ">
          <img
            className=" w-64 h-64 md:w-96 md:h-96 rounded-xl object-cover object-top "
            loading="lazy"
            src={indu_profile}
            alt="cg_profile"
          />
        </div>
        <div className="w-full md:w-4/6  flex flex-col gap-y-3 justify-start">
          <h1 className="text-2xl text-orange-500 font-bold">
            Dr. Indu Bhushan
          </h1>
          {/* <h3 className='text-xl font-bold'> Assistant Professor , School of Biotechnology</h3> */}
          <p className="text-lg text-justify">
            {" "}
            Dr. Indu Bhushan, Senior Assistant Professor at School of
            Biotechnology, Shri Mata Vaishno Devi University, specializes in
            Human Microbiome, Enzymology, and Nanotechnology. With over 20 years
            of research and 16 years of teaching experience, Dr. Bhushan has
            made significant contributions to biosciences through various
            national and international projects. A Ph.D. in Biochemistry (2008),
            Dr. Bhushan is recognized for his postdoctoral research in the USA
            under the prestigious Raman Fellowship (2015-16). He holds multiple
            patents, and over 50 publications in reputed journals of high
            impact. His research is supported by numerous awards, including the
            Faculty Performance Linked Award (2018-19) and Young Scientist Award
            (2013). He is also an Associate Editor for leading journals,
            including 3 Biotech and Annals of Biotechnology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConferenceConvener;
