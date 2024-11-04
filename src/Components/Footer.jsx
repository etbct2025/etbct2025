import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { TiSocialTumbler } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white flex flex-col items-center justify-center text-lg md:text-xl py-10 gap-y-10 px-8">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://www.facebook.com/SMVDUniversity/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500 transition-colors"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://www.linkedin.com/school/shri-mata-vaishno-devi-university"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500 transition-colors"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.pinterest.com/shrimatavaishnodeviuniversity"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500 transition-colors"
        >
          <FaPinterest size={30} />
        </a>
        <a
          href="https://smvdu.tumblr.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500 transition-colors"
        >
          <TiSocialTumbler size={30} />
        </a>
        <a
          href="https://twitter.com/smvduofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500 transition-colors"
        >
          <RiTwitterXFill size={30} />
        </a>
        <a
          href="https://www.youtube.com/SMVDUniversity"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500 transition-colors"
        >
          <FaYoutube size={30} />
        </a>
        <a
          href="https://www.instagram.com/smvduniversityofficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500 transition-colors"
        >
          <FaInstagram size={30} />
        </a>
      </div>
      <a
        href="https://drive.google.com/file/d/1Ijn0UEHqoF2Mb0uC33wDSYTBp9GdNUCe/view?usp=sharing"
        className="bg-orange-500 text-white animate-bounce  p-3 rounded-xl"
        target="_blank"
      >
        Download Brochure
      </a>
      <p className="text-center ">
        Shri Mata Vaishno Devi University @2024 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
