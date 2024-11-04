import Carousel from "../Components/AboutComponents/Carousel";
import ImportantDates from "../Components/CallComponents/ImportantDates";
import photo1 from "../../public/photo1.jpg";
const CallPage = () => {
  return (
    <>
      <Carousel />
      <section className="px-8 md:px-16 call-for-abstract py-10 flex flex-col gap-y-10">
        <h1 className=" text-center text-2xl sm:text-4xl text-orange-500 font-bold">
          Call For Abstract
        </h1>

        {/* <div className="particpates flex flex-col md:flex-row justify-center   md:gap-x-5 gap-y-5 ">
          <div className=" w-full  md:w-3/6  flex justify-center items-start">
            <img className="rounded-xl w-full h-64 sm:h-96 object-cover" src={photo1} alt="" />
          </div>
          <div className="w-full md:w-3/6 flex flex-col justify-start items-start gap-y-5 ">
            <p className="text-xl  ">
              Authors are requested to submit abstract (250 words) by filling the registration form latest by 30 November,2024. The
              abstract should be typed in MS word, Times New Roman, 12 font
              size and 1.5 line spacing. The recommended poster size shall be
              120 x 100 cm.
            </p>
            <h1 className="text-2xl sm:text-3xl text-orange-500">
              Who Can Participate
            </h1>

            <ul className="list-disc text-xl font-regular pl-5">
              <li>Academicians, Research Scholars and Students.</li>
              <li>Corporate and Industrial Personnel.</li>
              <li>Members of Non-profit Organizations, etc.</li>
            </ul>
          </div>
        </div> */}
        <div className="particpates flex flex-col md:flex-row justify-center md:gap-x-5 gap-y-5">
          <div className="w-full md:w-3/6 flex justify-center items-start rounded-xl">
            <img
              className="rounded-xl w-full h-64 sm:h-96 object-contain"
              src={photo1}
              alt=""
            />
          </div>
          <div className="w-full md:w-3/6 flex flex-col justify-start items-start gap-y-5">
            <p className="text-lg">
              Authors are requested to submit abstract (250 words) by filling
              the registration form latest by 30 November,2024. The abstract
              should be typed in MS word, Times New Roman, 12 font size and 1.5
              line spacing. The recommended poster size shall be 120 x 100 cm.
            </p>
            <h1 className="text-2xl sm:text-3xl text-orange-500">
              Who Can Participate
            </h1>
            <ul className="list-disc text-lg font-regular pl-5">
              <li>Academicians, Research Scholars and Students.</li>
              <li>Corporate and Industrial Personnel.</li>
              <li>Members of Non-profit Organizations, etc.</li>
            </ul>
          </div>
        </div>

        <ImportantDates />
        <div className="thrust-areas-section ">
          <div className=" ">
            <h1 className="text-orange-500 text-2xl sm:text-4xl mb-3 font-bold">
              {" "}
              Themes{" "}
            </h1>
            <p className="text-lg pb-3">
              All the interdisciplinary areas of Biosciences and Chemical
              Technology including (but not limited to)
            </p>
          </div>

          <ul className="list-disc pl-5 text-lg ">
            <li>Health Sciences</li>
            <li>Enzymology and Molecular biology</li>

            <li>Nanotechnology</li>

            <li>Environmental Sustainability</li>
            <li>Bioinformatics, Genomics and Proteomics</li>
            <li>Chemical Sciences</li>

            <li>Plant and Animal Science</li>
            <li>Microbial Biotechnology </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CallPage;
