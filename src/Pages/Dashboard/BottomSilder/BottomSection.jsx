import { Link } from "react-router-dom";
import BottomSlider from "./BottomSlider";
import { useEffect, useState } from "react";

const BottomSection = () => {
  const [cityName, setCityname] = useState(null)
  useEffect(()=>{
    fetch('CityName.json')
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data)
      setCityname(data)
    })
  }, [])
  return (
    <div className="mt-[20px] lg:flex items-center gap-[25px]">
      <div className="flex-1">
        <h2 className="text-[20px] font-bold">Featured Testimonial</h2>
        <div className="mt-[20px] bg-white p-[20px] rounded-lg">
          <BottomSlider></BottomSlider>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-[20px] font-bold">Popular Cities</h2>
        <div className="bg-white p-[20px] mt-[20px] rounded-lg">
            <div className="grid grid-cols-3  text-center ">
              {
                cityName?.map((item)=> <p key={item.id} className="row-item text-[#156BCA] underline p-[20px]"><Link to="">{item.cityName}</Link></p>)
              }
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
