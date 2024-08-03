import { Link } from "react-router-dom"


const TopSection = () => {
  return (
    <>
    <div className="topUp bg-[#FFFFFF] p-[25px] rounded-lg lg:flex justify-between items-center gap-[25px]">
            <div>
            <p>I.m Looking for Massage Therapist Near...</p> <br />
            <p>In using this site, I agree to be bound by the <Link className="text-blue-500" to="#">Terms of Service</Link>  and  <Link className="text-blue-500" to="#">Privacy Policy</Link></p>
            <div className="relative mt-[20px]">
                <input className="bg-[#EEF2F5] focus:outline-none rounded-lg text-[#5C635A] w-full p-3" placeholder="ZIP code or city name" type="text" />
                <button className="bg-[#156BCA] text-white px-[25px] py-[9px] rounded-lg absolute top-1 right-2">GO</button>
            </div>
            </div>
            <div>
                <img src='https://i.ibb.co/7QrjWcK/dashboard1.png' alt="" />
            </div>
          </div>
    </>
  )
}

export default TopSection