import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="contact-section bg-sky-800 py-10 flex flex-col justify-center items-center  ">
      <div className="text-2xl sm:text-4xl text-center mb-10 text-white">
        <h1>Contact Us</h1>
      </div>
      <div className="flex md:flex-row md:gap-x-5 gap-y-5 flex-col justify-center items-center">
        <div className=" w-full md:w-3/6 px-8 md:px-16 flex flex-col gap-y-3 text-white">
          <div>
            <h1 className="text-xl sm:text-3xl  font-bold">
              Get in touch with us
            </h1>
            <h3 className="text-lg sm:text-2xl  font-regular">
              In case of any query, Feel free to contact us.
            </h3>
          </div>
          <div className="flex justify-start items-center gap-x-3 text-white">
            <span className="text-orange-500 text-xl">
              <FaPhone />
            </span>{" "}
            +91 9419320051, +91 6005178581, +91 8494064581
          </div>
          <div className="flex justify-start items-center gap-x-3 text-white">
            <span className="text-orange-500 text-xl">
              <IoIosMail />
            </span>{" "}
            etbct-2025@smvdu.ac.in
          </div>
          <div className="flex justify-start items-center gap-x-3 text-white">
            <span className="text-orange-500 text-xl">
              <FaLocationDot />
            </span>{" "}
            School of Biotechnology, SMVDU, Katra, India - 182320.
          </div>
        </div>
        <div className="w-full md:w-3/6 flex justify-center items-center px-8 ">
          <iframe
            className="rounded-xl w-full h-48 sm:w-64 sm:h-64 md:w-96 md:h-96"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.3386952212813!2d74.95151497468636!3d32.94206617553463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e7f68e599872f%3A0xed34304519ea1c71!2sShri%20Mata%20Vaishno%20Devi%20University%20(SMVDU)%2C%20Katra!5e0!3m2!1sen!2sin!4v1719136216344!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact