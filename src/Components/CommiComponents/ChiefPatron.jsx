import vc_profile from "../../../public/keyPersons/VC.jpg"
const ChiefPatron = () => {
  return (
    <section className="chief-patron  px-8 md:px-16">
      <h1 className="text-3xl bg-sky-800 text-white font-extrabold  mb-3 pl-5 py-2">
        Chief Patron
      </h1>
      <div className="flex flex-col md:flex-row  gap-y-5 md:gap-x-5  gap-x-5 py-10">
        <div className="  flex justify-center md:justify-start  w-full md:w-2/6 ">
          <img
            className=" w-64 h-64 md:w-96 md:h-96 rounded-xl"
            loading="lazy"
            src={vc_profile}
            alt="vc_profile"
          />
        </div>
        <div className="w-full md:w-4/6  flex flex-col gap-y-3 justify-start">
          <h1 className="text-2xl text-orange-500 font-bold">
            Prof. (Dr.) Pragati Kumar
          </h1>
          <h3 className="text-xl font-bold">
            {" "}
            Honorable Vice Chancellor, SMVDU
          </h3>
          <p className="text-lg text-justify">
            {" "}
            Prof. Pragati Kumar, Vice-Chancellor of Shri Mata Vaishno Devi
            University (SMVDU), Katra, has served as a Professor in the
            Department of Electrical Engineering at Delhi Technological
            University, and was appointed as Vice Chancellor of the Shri Mata
            Vaishno Devi University by the Lieutenant Governor of UT of J&K, the
            Hon&apos;ble Chancellor of the University. His areas of interests
            are Active Networks, Analog Integrated Circuit, Non-linear Circuit
            Design, Analog Instrumentation etc. He has also worked as Head,
            Department of Electrical Engineering and Dean, Industrial Research
            Development at Delhi Technical University. He has to his credit
            numerous projects, patents and publications in various reputed
            International/National Journals of high impact factors, books and
            conferences of repute. His vast experience in teaching and research
            is expected to help Shri Mata Vaishno Devi University in achieving
            success in all fields.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChiefPatron