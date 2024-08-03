import Sliders from "./PersonSlider";

const FetchersSlider = () => {
  return (
    <>
      <div className="mt-[20px]">
        <h2 className="text-[20px] font-bold">Featured Therapist</h2>
        <div>
          <div className="bg-white p-[30px] mt-[10px] rounded-lg">
            <Sliders></Sliders>
          </div>
        </div>
      </div>
    </>
  );
};

export default FetchersSlider;
