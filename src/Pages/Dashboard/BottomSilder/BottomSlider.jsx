import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import "./stylesot.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
const BottomSlider = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("UnderPerson.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
            {
                data?.map((item)=> <div key={item.zip_code}>
                <div className=" flex border gap-[15px] p-[10px] items-center rounded-lg mb-[10px]">
                  <div className="w-[40%]">
                    <img className="h-[100%]" src={item.image} alt="" />
                  </div>
                  <div className="w-[60%] space-y-4">
                    <p className="flex items-center gap-[15px]">
                      {" "}
                      <FaLocationDot /> <span>{item.zip_code}, {item.city}</span>{" "}
                    </p>
                    <p className="text-left font-bold">
                      {item.name} <Link to="">by Cort</Link>
                    </p>
                    <p className="text-left">
                      {item.description.slice(0, 30)} <Link to="" className="text-blue-500"> Read More..</Link>
                    </p>
                  </div>
                </div>
                </div> )
            }
          
        </Slider>
      </div>
    </>
  );
};

export default BottomSlider;

{
  /* <div className=' flex border p-[30px] items-center rounded-lg mb-[10px]'>
            <div className=''>
                <img src={imge1} alt="" />
            </div>
            <div className=''></div>
            <div className=' space-y-4'>
                <p className='flex items-center gap-[15px]'> <FaLocationDot /> <span>123 Elm Street, ew York</span> </p>
                <p className='text-left font-bold'>Healing Bodywork <Link to="">by Cort</Link></p>
                <p className='text-left'>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of</p>
            </div>
        </div>
        <div className=' flex border p-[30px] items-center rounded-lg'>
            <div className='w-[30%]'>
                <img src={imge2} alt="" />
            </div>
            <div className='w-[5%]'></div>
            <div className='w-[65%] space-y-4'>
                <p className='flex items-center gap-[15px]'> <FaLocationDot /> <span>123 Elm Street, ew York</span> </p>
                <p className='text-left font-bold'>Healing Bodywork <Link to="">by Cort</Link></p>
                <p className='text-left'>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of</p>
            </div>
        </div> */
}
