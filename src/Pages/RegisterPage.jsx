import Carousel from "../Components/AboutComponents/Carousel";
import { FaExternalLinkAlt } from "react-icons/fa";

import qrcode from "../../public/qrcode.jpeg";
const RegisterPage = () => {
  return (
    <>
      <Carousel />
      <section>
        <div className="registration py-5 px-6 md:px-16">
          <div className="container md:px-16">
            <h1 className="text-2xl sm:text-4xl text-orange-500 mb-2">
              Registration
            </h1>

            <p className="text-lg ">
              Participants are requested to register for the conference by
              filling the registration form.
            </p>
            <a
              href="https://forms.gle/6pwGomGnApfKxhTU7"
              className="text-orange-500 underline text-lg flex gap-x-3 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to register{" "}
              <span>
                <FaExternalLinkAlt />
              </span>
            </a>
            <p className="text-lg ">
              *All the registered delegates shall be entitled to Conference kit,
              participation in all sessions, participatory certificate, 2 high
              tea, 1 breakfast, 2 lunches and 1 dinner.
            </p>
          </div>
        </div>

        <div className="accommodation px-4 md:px-16 py-2">
          <div className="container md:px-16">
            <h1 className="text-3xl text-orange-500 pb-2">Registration Fees</h1>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="table border-collapse w-full text-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-slate-300 p-3 text-center">
                      S.No.
                    </th>
                    <th className="border border-slate-300 p-3 text-center">
                      Participants
                    </th>
                    <th className="border border-slate-300 p-3 text-center whitespace-normal">
                      Early Bird <br />
                      (Upto 30.11.2024)
                    </th>
                    <th className="border border-slate-300 p-3 text-center">
                      Late Registration
                    </th>
                    <th className="border border-slate-300 p-3 text-center whitespace-normal">
                      On Spot Registration <br />
                      (On Conference Dates)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-3 text-center">
                      1
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Academician/Technical Staff
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 3000/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 3500/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 3800/-
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 text-center">
                      2
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Delegates from R&D /Industry
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 4000/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 4500/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 4800/-
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 text-center">
                      3
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Scholar (Ph.D)
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 1800/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 2300/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 2500/-
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 text-center">
                      4
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Students(UG & PG)
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 1000/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 1500/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 1700/-
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 text-center">
                      5
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      International Delegates
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      $200
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      $250
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      $280
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3 text-center">
                      6
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Accompanying Person
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 1500/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 1500/-
                    </td>
                    <td className="border border-slate-300 p-3 text-center">
                      Rs. 1500/-
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg font-bold mt-4">
              *Additional Rs. 500 for National and 50$ for International
              Delegates those who are interested to attend the workshop.
            </p>

            <p className="text-lg pb-3">
              For Key-note speakers, accommodation shall be arranged by the
              organizers. Accommodation for other delegates of ETBCT-2025 would
              be available on a sharing basis at reasonable prices in hotels at
              Katra. Travel from hotels to the venue will be arranged by
              organizers only in the morning and evening.
            </p>
          </div>
        </div>

        <div className="py-10 px-4 md:px-16 bg-sky-800">
          <div className="container mx-auto">
            <h1 className="text-3xl text-center font-bold text-white mb-8">
              Payment Information
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 bg-white shadow-lg p-6 rounded-lg ">
              {/* Left Column - Bank Account Details */}
              <div className="w-full md:w-1/2 mb-6 md:mb-0  flex justify-center items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Bank Account Details
                  </h2>
                  <ul className="list-none text-lg text-gray-700 space-y-2">
                    <li>
                      <span className="font-bold">Account No:</span>{" "}
                      0477040520000109
                    </li>
                    <li>
                      <span className="font-bold">IFSC:</span> JAKA0SMVDUN
                    </li>
                    <li>
                      <span className="font-bold">MICR Code:</span> 182051202
                    </li>
                    <li>
                      <span className="font-bold">Bank:</span> J&K Bank
                    </li>
                    <li>
                      <span className="font-bold">Branch:</span> SMVDU
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - QR Code */}
              <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Pay via QR Code
                  </h2>
                  <img
                    src={qrcode}
                    alt="Bank QR Code"
                    className="w-64 h-64 mx-auto border-4 border-orange-500 rounded-lg p-2"
                  />
                  <p className="text-lg text-gray-700 mt-4">
                    Scan this code to make the payment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
