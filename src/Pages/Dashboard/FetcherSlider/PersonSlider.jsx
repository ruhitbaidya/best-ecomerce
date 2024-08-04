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
import { useEffect, useState } from "react";
const PersonSlider = () => {
  const [data, setData] = useState(null)
 useEffect(()=>{
  fetch('Persons.json')
  .then((res)=> res.json() )
  .then((data)=>{
    console.log(data)
    setData(data)
  })
 }, [])
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

        {
          data?.map((item)=> <SwiperSlide style={{width : "300px"}} key={item.name} className="rounded-lg">
          <div className="card shadow-xl rounded-lg">
            <div className="p-[10px] mb-[10px]">
              <img style={{height : "200px", width : "300px"}} className="rounded-lg"
                src={item?.imageUrl}
                alt="images"
              />
            </div>
            <div className="px-[10px]">
            <h2 className="text-left font-bold mb-[15px]">{item.personName}</h2>
            <p className="flex gap-[6px] items-center"> <FaLocationDot /> <span>{item.countryZipCode}, {item.cityName}</span> </p>
            <p className="flex gap-[6px]  items-center"> <FaCar />  <span>Mobile & In-Studio</span></p>
            </div>
            <div className="mt-[15px]">
                <button className="py-[12px] bg-blue-500 rounded-b-lg w-full">See Details</button>
              </div>
          </div>
        </SwiperSlide> )
        }        
      </Swiper>
    </>
  );
};

export default PersonSlider;
