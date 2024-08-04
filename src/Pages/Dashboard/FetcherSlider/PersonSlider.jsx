import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../../UserAuth/UserAuth";
const PersonSlider = () => {
  const { search } = useContext(userContext);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("Persons.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(search){
          const filteredData = data?.filter(
            (item) =>
              item.personName.toLowerCase().includes(search.toLowerCase()) ||
              item.countryZipCode.toLowerCase().includes(search.toLowerCase())
          );
          setData(filteredData);
        }else{
          setData(data);
        }
        
      });
  }, [search]);



  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container gap-[25px]">
        <Slider {...settings}>
          {data?.map((item) => (
            <div key={item.name} className="rounded-lg border mr-[10px]">
              <div className="card shadow-xl rounded-lg">
                <div className="p-[10px] mb-[10px]">
                  <img
                    className="rounded-lg h-[200px] w-full object-cover"
                    src={item?.imageUrl}
                    alt="images"
                  />
                </div>
                <div className="px-[10px]">
                  <h2 className="text-left font-bold mb-[15px]">
                    {item.personName}
                  </h2>
                  <p className="flex gap-[6px] items-center">
                    {" "}
                    <FaLocationDot />{" "}
                    <span>
                      {item.countryZipCode}, {item.cityName}
                    </span>{" "}
                  </p>
                  <p className="flex gap-[6px]  items-center">
                    {" "}
                    <FaCar /> <span>Mobile & In-Studio</span>
                  </p>
                </div>
                <div className="mt-[15px]">
                  <button className="py-[12px] hover:bg-[#156BCA] hover:text-[#FFFFFF] bg-[#D4E9FF] underline text-[#152A16] rounded-b-lg w-full">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PersonSlider;
