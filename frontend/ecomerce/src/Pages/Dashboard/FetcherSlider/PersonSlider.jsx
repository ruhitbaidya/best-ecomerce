// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";
import { FaLocationDot } from "react-icons/fa6";
// import required modules
import { Navigation } from "swiper/modules";
import { FaCar } from "react-icons/fa";
const PersonSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="rounded-lg">
          <div className="card shadow-xl rounded-lg">
            <div className="p-[10px] mb-[10px]">
              <img className="rounded-lg"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </div>
            <div className="px-[10px]">
            <h2 className="text-left font-bold mb-[15px]">Alexander</h2>
            <p className="flex gap-[6px] items-center"> <FaLocationDot /> <span>123 Elm Street, New York</span> </p>
            <p className="flex gap-[6px]  items-center"> <FaCar />  <span>Mobile & In-Studio</span></p>
            </div>
            <div className="mt-[15px]">
                <button className="py-[12px] bg-blue-500 rounded-b-lg w-full">Buy Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="card shadow-xl rounded-lg">
            <div className="p-[10px] mb-[10px]">
              <img className="rounded-lg"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </div>
            <div className="px-[10px]">
            <h2 className="text-left font-bold mb-[15px]">Alexander</h2>
            <p className="flex gap-[6px] items-center"> <FaLocationDot /> <span>123 Elm Street, New York</span> </p>
            <p className="flex gap-[6px]  items-center"> <FaCar />  <span>Mobile & In-Studio</span></p>
            </div>
            <div className="mt-[15px]">
                <button className="py-[12px] bg-blue-500 rounded-b-lg w-full">Buy Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="card shadow-xl rounded-lg">
            <div className="p-[10px] mb-[10px]">
              <img className="rounded-lg"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </div>
            <div className="px-[10px]">
            <h2 className="text-left font-bold mb-[15px]">Alexander</h2>
            <p className="flex gap-[6px] items-center"> <FaLocationDot /> <span>123 Elm Street, New York</span> </p>
            <p className="flex gap-[6px]  items-center"> <FaCar />  <span>Mobile & In-Studio</span></p>
            </div>
            <div className="mt-[15px]">
                <button className="py-[12px] bg-blue-500 rounded-b-lg w-full">Buy Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="card shadow-xl rounded-lg">
            <div className="p-[10px] mb-[10px]">
              <img className="rounded-lg"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </div>
            <div className="px-[10px]">
            <h2 className="text-left font-bold mb-[15px]">Alexander</h2>
            <p className="flex gap-[6px] items-center"> <FaLocationDot /> <span>123 Elm Street, New York</span> </p>
            <p className="flex gap-[6px]  items-center"> <FaCar />  <span>Mobile & In-Studio</span></p>
            </div>
            <div className="mt-[15px]">
                <button className="py-[12px] bg-blue-500 rounded-b-lg w-full">Buy Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="card shadow-xl rounded-lg">
            <div className="p-[10px] mb-[10px]">
              <img className="rounded-lg"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </div>
            <div className="px-[10px]">
            <h2 className="text-left font-bold mb-[15px]">Alexander</h2>
            <p className="flex gap-[6px] items-center"> <FaLocationDot /> <span>123 Elm Street, New York</span> </p>
            <p className="flex gap-[6px]  items-center"> <FaCar />  <span>Mobile & In-Studio</span></p>
            </div>
            <div className="mt-[15px]">
                <button className="py-[12px] bg-blue-500 rounded-b-lg w-full">Buy Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="card shadow-xl rounded-lg">
            <div className="p-[10px] mb-[10px]">
              <img className="rounded-lg"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </div>
            <div className="px-[10px]">
            <h2 className="text-left font-bold mb-[15px]">Alexander</h2>
            <p className="flex gap-[6px] items-center"> <FaLocationDot /> <span>123 Elm Street, New York</span> </p>
            <p className="flex gap-[6px]  items-center"> <FaCar />  <span>Mobile & In-Studio</span></p>
            </div>
            <div className="mt-[15px]">
                <button className="py-[12px] bg-blue-500 rounded-b-lg w-full">Buy Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="card shadow-xl rounded-lg">
            <div className="p-[10px] mb-[10px]">
              <img className="rounded-lg"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </div>
            <div className="px-[10px]">
            <h2 className="text-left font-bold mb-[15px]">Alexander</h2>
            <p className="flex gap-[6px] items-center"> <FaLocationDot /> <span>123 Elm Street, New York</span> </p>
            <p className="flex gap-[6px]  items-center"> <FaCar />  <span>Mobile & In-Studio</span></p>
            </div>
            <div className="mt-[15px]">
                <button className="py-[12px] bg-blue-500 rounded-b-lg w-full">Buy Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="card shadow-xl rounded-lg">
            <div className="p-[10px] mb-[10px]">
              <img className="rounded-lg"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </div>
            <div className="px-[10px]">
            <h2 className="text-left font-bold mb-[15px]">Alexander</h2>
            <p className="flex gap-[6px] items-center"> <FaLocationDot /> <span>123 Elm Street, New York</span> </p>
            <p className="flex gap-[6px]  items-center"> <FaCar />  <span>Mobile & In-Studio</span></p>
            </div>
            <div className="mt-[15px]">
                <button className="py-[12px] bg-blue-500 rounded-b-lg w-full">Buy Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="card shadow-xl rounded-lg">
            <div className="p-[10px] mb-[10px]">
              <img className="rounded-lg"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </div>
            <div className="px-[10px]">
            <h2 className="text-left font-bold mb-[15px]">Alexander</h2>
            <p className="flex gap-[6px] items-center"> <FaLocationDot /> <span>123 Elm Street, New York</span> </p>
            <p className="flex gap-[6px]  items-center"> <FaCar />  <span>Mobile & In-Studio</span></p>
            </div>
            <div className="mt-[15px]">
                <button className="py-[12px] bg-blue-500 rounded-b-lg w-full">Buy Now</button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-lg">
          <div className="card shadow-xl rounded-lg">
            <div className="p-[10px] mb-[10px]">
              <img className="rounded-lg"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </div>
            <div className="px-[10px]">
            <h2 className="text-left font-bold mb-[15px]">Alexander</h2>
            <p className="flex gap-[6px] items-center"> <FaLocationDot /> <span>123 Elm Street, New York</span> </p>
            <p className="flex gap-[6px]  items-center"> <FaCar />  <span>Mobile & In-Studio</span></p>
            </div>
            <div className="mt-[15px]">
                <button className="py-[12px] bg-blue-500 rounded-b-lg w-full">Buy Now</button>
              </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default PersonSlider;
