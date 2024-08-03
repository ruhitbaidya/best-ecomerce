import { Link } from "react-router-dom";
import BottomSlider from "./BottomSlider";

const BottomSection = () => {
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
            <div className="grid grid-cols-3 gap-[20px] text-center">
                <p className="border"><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
                <p><Link to="">Atlanta, GA</Link></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
