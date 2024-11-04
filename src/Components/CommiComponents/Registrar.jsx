 import cg_profile from "../../../public/keyPersons/registrar.webp"

const Registrar = () => {
  return (
    <section className="chief-patron px-8 md:px-16">
      <h1 className="text-3xl bg-sky-800 pl-5 text-white font-extrabold  mb-3 py-2">
        Patron
      </h1>

      <div className="flex flex-col md:flex-row  gap-y-5 md:gap-x-5  gap-x-5 py-10">
        <div className="   overflow-hidden flex   justify-center md:justify-start  w-full md:w-2/6  ">
          <img
            className=" w-64 h-64 md:w-96 md:h-96 rounded-xl object-cover "
            loading="lazy"
            src={cg_profile}
            alt="cg_profile"
          />
        </div>
        <div className="w-full md:w-4/6  flex flex-col gap-y-3 justify-start">
          <h1 className="text-2xl text-orange-500 font-bold">
            Mr. Ajay Kumar Sharma
          </h1>
          <h3 className="text-xl font-bold"> Registrar ( JKAS ), SMVDU</h3>
        </div>
      </div>
    </section>
  );
}

export default Registrar