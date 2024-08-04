import { Link } from "react-router-dom";
import imge1 from "../../../assets/btslid1.png";
import imge2 from "../../../assets/btslid2.png";
import { FaLocationDot } from "react-icons/fa6";
import "./stylesot.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
const BottomSlider = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("Persons.json")
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
          <div className=" flex border p-[30px] items-center rounded-lg mb-[10px]">
            <div className="">
              <img src={imge1} alt="" />
            </div>
            <div className=""></div>
            <div className=" space-y-4">
              <p className="flex items-center gap-[15px]">
                {" "}
                <FaLocationDot /> <span>123 Elm Street, ew York</span>{" "}
              </p>
              <p className="text-left font-bold">
                Healing Bodywork <Link to="">by Cort</Link>
              </p>
              <p className="text-left">
                Cort’s healing bodywork massage was absolutely transformative.
                Their intuitive touch and deep understanding of
              </p>
            </div>
          </div>
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
