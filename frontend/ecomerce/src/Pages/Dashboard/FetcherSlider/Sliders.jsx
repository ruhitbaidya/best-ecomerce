import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import image1 from "../../../assets/image1.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import "./styles.css";

const Sliders = () => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='rounded-lg'>
          <div className='card p-[10px] border rounded-lg'>
            <div>
              <img src={image1} alt="Slide 1" />
            </div>
            <div>
              <h4>Alexander Cort</h4>
              <p><IoLocationSharp /> <span>123 Elm Street, New York</span></p>
              <p><FaCar /> <span>Mobile & In-Studio</span></p>
            </div>
            <div>
              <button>See Details</button>
            </div>
          </div>
        </SwiperSlide>
        {/* Additional SwiperSlide components */}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Sliders;
