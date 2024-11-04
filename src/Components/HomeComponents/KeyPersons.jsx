import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import vc_profile from "../../../public/keyPersons/VC.jpg"
import cg_profile from "../../../public/keyPersons/cg.jpg"
import convener_profile from "../../../public/keyPersons/indubhusan.jpg"
import registrar from "../../../public/keyPersons/registrar.webp"
import ratna from "../../../public/members/ratna.jpeg"
// import sharada from "../../../public/members/sharada.jpeg"
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const KeyPersons = () => {
  return (
    <div className="key-person-section py-16 px-8 sm:px-16">
      <div className="text-4xl font-bold text-center mb-10 text-orange-500 ">
        <h1> Key Persons </h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        // slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        loop={true} // Enable infinite looping
        // autoplay={{
        //   delay: 3000, // Delay between slides in ms
        //   disableOnInteraction: false, // Continue autoplay after user interaction
        // }}
        className=" py-5 sm:px-10"
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide on small screens (sm)
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2, // 2 slides on medium screens (md)
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3, // 3 slides on large screens (lg)
            spaceBetween: 50,
          },
          1280: {
            slidesPerView: 4, // 3 slides on large screens (lg)
            spaceBetween: 50,
          },
          1470: {
            slidesPerView: 5, // 5 slides on extra-large screens (xl)
            spaceBetween: 50,
          },
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl ">
          <div className=""><img className="rounded-t-xl  h-[300px] w-full sm:h-64 object-cover object-top" src={cg_profile} alt="" /></div>
          <div className="py-2 px-5">
             <h1 className="text-xl text-orange-500 text-center">Dr. Jitendra Singh</h1>
             <p className="text-lg text-center">Union Minister, PMO, GoI</p>
             <p className="text-lg text-center">Chief Guest</p>
          </div>
        </motion.div>
        </SwiperSlide>
        <SwiperSlide>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl ">
          <div ><img className="rounded-t-xl  h-[300px] w-full sm:h-64 object-cover object-top" src={vc_profile} alt="" /></div>
          <div className="py-2 px-5">
             <h1 className="text-xl text-orange-500 text-center">Prof. (Dr.) Pragati Kumar</h1>
             <p className="text-lg text-center">Vice Chancellor, SMVDU</p>
             <p className="text-lg text-center">Chief Patron</p>
          </div>
        </motion.div>
        </SwiperSlide>
        <SwiperSlide>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl ">
          <div ><img className="rounded-t-xl  h-[300px] w-full sm:h-64 object-cover object-top" src={registrar} alt="" /></div>
          <div className="py-2 px-5">
             <h1 className="text-xl text-orange-500 text-center">Sh. Ajay Kumar Sharma (JKAS)</h1>
             <p className="text-lg text-center">Registrar, SMVDU</p>
             <p className="text-lg text-center">Patron</p>
          </div>
        </motion.div>
        </SwiperSlide>
        <SwiperSlide>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl ">
          <div ><img className="rounded-t-xl h-[300px] w-full sm:h-64 object-cover object-top" src={convener_profile} alt="" /></div>
          <div className="py-2 px-5">
             <h1 className="text-xl text-orange-500 text-center">Dr. Indu Bhushan</h1>
             <p className="text-lg text-center">Assitant Professor, SoBT, SMVDU</p>
             <p className="text-lg text-center">Conference Convener</p>
          </div>
        </motion.div>
        </SwiperSlide>
        <SwiperSlide>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl ">
          <div className=""><img className="rounded-t-xl  h-[300px] w-full sm:h-64 object-cover object-top" src={ratna} alt="" /></div>
          <div className="pb-5">
             <h1 className="text-xl text-orange-500 text-center">Dr. Ratna Chandra</h1>
             <p className="text-lg text-center">Head, SoBT</p>
             <p className="text-lg text-center">Organizing Secretary</p>
          </div>
        </motion.div>
        </SwiperSlide>

        
      </Swiper>
      {/* <div className="px-16 flex justify-center items-center gap-10 flex-wrap">
      <motion.div whileHover={{scale:1.1}} className="border rounded-xl w-[250px]">
          <div className=""><img className="rounded-t-xl w-64 h-[300px]sm:w-full sm:h-64 object-cover" src={cg_profile} alt="" /></div>
          <div className="py-2 px-5">
             <h1 className="text-xl text-yellow-500 text-center">Dr. Jitendra Singh</h1>
             <p className="text-lg text-center">Union Minister, PMO, GoI</p>
             <p className="text-lg text-center">Chief Guest</p>
          </div>
        </motion.div>
      <motion.div whileHover={{scale:1.1}} className="border rounded-xl w-[250px]">
          <div ><img className="rounded-t-xl w-64 h-[300px]sm:w-full sm:h-64 object-cover" src={vc_profile} alt="" /></div>
          <div className="py-2 px-5">
             <h1 className="text-xl text-yellow-500 text-center">Prof. (Dr.) Pragati Kumar</h1>
             <p className="text-lg text-center">Vice Chancellor, SMVDU</p>
             <p className="text-lg text-center">Chief Patron</p>
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl w-[250px]">
          <div ><img className="rounded-t-xl w-64 h-[300px] sm:w-full sm:h-64 object-cover" src={registrar} alt="" /></div>
          <div className="py-2 px-5">
             <h1 className="text-xl text-yellow-500 text-center">Sh. Ajay Kumar Sharma (JKAS)</h1>
             <p className="text-lg text-center">Registrar, SMVDU</p>
             <p className="text-lg text-center">Patron</p>
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl w-[250px]">
          <div ><img className="rounded-t-xl w-64 h-[300px]sm:w-full sm:h-64 object-cover object-top" src={convener_profile} alt="" /></div>
          <div className="py-2 px-5">
             <h1 className="text-xl text-yellow-500 text-center">Dr. Indu Bhushan</h1>
             <p className="text-lg text-center">Assitant Professor, SoBT, SMVDU</p>
             <p className="text-lg text-center">Conference Convener</p>
          </div>
        </motion.div>
        <motion.div whileHover={{scale:1.1}} className="border rounded-xl w-[300px] h-[350px]">
          <div className=""><img className="rounded-t-xl  h-[250px] w-full sm:h-64 object-cover object-top" src={ratna} alt="" /></div>
          <div className="pb-5">
             <h1 className="text-xl text-yellow-500 text-center">Dr. Ratna Chandra</h1>
             <p className="text-lg text-center">Head, SoBT</p>
             <p className="text-lg text-center">Organizing Secretary</p>
          </div>
        </motion.div>
        

      </div> */}
    </div>
  );
};

export default KeyPersons;
