/* eslint-disable react/no-unescaped-entities */
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
// import smvdu_image from "../../public/conference.jpg";
import first_2019 from "../../public/2019conf/first.jpg";
import second_2019 from "../../public/2019conf/second.jpg";
import third_2019 from "../../public/2019conf/third.jpg";
import fourth_2019 from "../../public/2019conf/fourth.jpg";
import fifth_2019 from "../../public/2019conf/fifth.jpg";
import first_2022 from "../../public/2022conf/first.jpeg";
import second_2022 from "../../public/2022conf/second.jpeg";
import third_2022 from "../../public/2022conf/third.jpeg";
import fourth_2022 from "../../public/2022conf/fourth.jpeg";

const PreviousConfe = () => {
  return (
    <section className="flex flex-col gap-y-[100px] prev-conferences px-8 md:px-16 py-10">
      <div className="2022-conf flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-3/6 flex justify-center items-center">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className=" h-[350px] md:h-[550px]">
                <img
                  className="rounded-xl w-full h-full object-contain"
                  loading="lazy"
                  src={first_2022}
                  alt="Conference 2022 First"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-[350px] md:h-[550px]">
                <img
                  className="rounded-xl w-full h-full object-contain"
                  loading="lazy"
                  src={second_2022}
                  alt="Conference 2022 Second"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-[350px] md:h-[550px]">
                <img
                  className="rounded-xl w-full h-full object-contain"
                  loading="lazy"
                  src={third_2022}
                  alt="Conference 2022 Third"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-[350px] md:h-[550px]">
                <img
                  className="rounded-xl w-full h-full object-contain"
                  loading="lazy"
                  src={fourth_2022}
                  alt="Conference 2022 Fourth"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full md:w-3/6 flex flex-col gap-y-5">
          <h1 className="text-2xl text-orange-500 font-bold">ETBCT 2022</h1>
          <p className="text-lg text-justify">
            The School of Biotechnology at Shri Mata Vaishno Devi University, in
            collaboration with CSIR-IIIM Jammu and BRSI, organized a three-day
            international conference on "Emerging Trends in Biosciences and
            Chemical Technology-2022" from 3rd to 5th December 2022. The event
            featured Dr. Jitendra Singh, Union Minister of State (Independent
            Charge) for Science and Technology, as the chief guest, and Prof.
            Manoj Kumar Dhar, former Vice Chancellor of the University of Jammu,
            as the guest of honor. The conference brought together renowned
            scientists, academics, and industry professionals from across the
            globe, including participants from Argentina, Brazil, Greece,
            Malaysia, and more. A total of thirteen sessions were conducted,
            focusing on contemporary issues and future trends in biosciences and
            chemical technology. More than 30 invited speakers and 300
            participants attended the event. A book titled Practical
            Biochemistry, authored by Dr. Indu Bhushan, was also launched during
            the event. The conference concluded with a valedictory ceremony
            where awards were presented for the best paper presentations. The
            event was organized under the convenorship of Dr. Indu Bhushan and
            was deemed a resounding success.
          </p>
        </div>
      </div>

      <div className="2019-conf flex flex-col md:flex-row-reverse gap-10">
        <div className="w-full md:w-3/6 flex justify-center items-center">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className=" h-[350px] md:h-[550px]">
                <img
                  className="rounded-xl w-full h-full object-contain"
                  loading="lazy"
                  src={first_2019}
                  alt="Conference 2019 First"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-[350px] md:h-[550px]">
                <img
                  className="rounded-xl w-full h-full object-contain"
                  loading="lazy"
                  src={second_2019}
                  alt="Conference 2019 Second"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-[350px] md:h-[550px]">
                <img
                  className="rounded-xl w-full h-full object-contain"
                  loading="lazy"
                  src={third_2019}
                  alt="Conference 2019 Third"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-[350px] md:h-[550px]">
                <img
                  className="rounded-xl w-full h-full object-contain"
                  loading="lazy"
                  src={fourth_2019}
                  alt="Conference 2019 Fourth"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" h-[350px] md:h-[550px]">
                <img
                  className="rounded-xl w-full h-full object-contain"
                  loading="lazy"
                  src={fifth_2019}
                  alt="Conference 2019 Fifth"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full md:w-3/6 flex flex-col gap-y-5">
          <h1 className="text-2xl text-orange-500 font-bold">ICAB 2019</h1>
          <p className="text-lg text-justify">
            The International Conference on Applied Biology (ICAB-2019) took
            place at Shri Mata Vaishno Devi University (SMVDU), Katra, in
            November 2019. Organized by the School of Biotechnology, a leading
            research-oriented department at SMVDU, the event was inaugurated by
            Dr. Jitendra Singh, Minister of State, who graced the occasion as
            the Chief Guest. In his address, Dr. Singh reflected on his close
            ties with the university and stressed the importance of SMVDU
            establishing itself in cutting-edge research fields such as
            Himalayan studies, Atomic Energy, and Space Technology. The
            conference brought together distinguished speakers, participants,
            and delegates from India and abroad, showcasing the best minds in
            applied biology. Covering a wide range of topics, including
            Medicine, Biochemistry, Biotechnology, Zoology, Botany, and
            Environmental Sciences, the event featured over 20 keynote and
            invited talks. Its primary goals were to promote international
            collaboration, offer valuable learning experiences, and inspire
            participants to contribute to societal advancement through
            groundbreaking research. With over 300 attendees from various parts
            of the world, the conference was a resounding success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreviousConfe;
