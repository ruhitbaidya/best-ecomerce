import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { PiUsers } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { CgNotes } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { CiSquareAlert } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import TopSection from "./TopSection/TopSection";
import FetchersSlider from "./FetcherSlider/FetchersSlider";
import { userContext } from "../../UserAuth/UserAuth";
import BottomSection from "./BottomSilder/BottomSection";


  const Dashboard = () => {
    const {logoutuser, user} = useContext(userContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    console.log(user.displayName)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-[#FFFFFF] border text-white fixed md:relative top-0 right-0 md:right-auto h-full w-64 md:w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:translate-x-0`}
      >
        <div className="p-[20px]">
          <h2 className="text-[#4285F3] text-[40px] text-center">LOGO</h2>
        </div>
        <ul className="text-gray-500">
          <li className="mb-4 p-4 text-[20px] text-gray-800 font-bold bg-[#D4E9FF] border-l-4 border-gray-700">
            {" "}
            <Link className="flex items-center gap-[15px]" to="#">
              <HiOutlineSquares2X2 /> Home
            </Link>
          </li>
          <li className="mb-4 p-4 text-[20px]">
            {" "}
            <Link className="flex items-center gap-[15px]" to="#">
              <PiUsers /> New Listing
            </Link>
          </li>
          <li className="mb-4 p-4 text-[20px]">
            {" "}
            <Link className="flex items-center gap-[15px]" to="#">
              <CiSearch /> Search
            </Link>
          </li>
          <li className="mb-4 p-4 text-[20px]">
            {" "}
            <Link className="flex items-center gap-[15px]" to="#">
              <CgNotes /> About
            </Link>
          </li>
          <li className="mb-4 p-4 text-[20px]">
            {" "}
            <Link className="flex items-center gap-[15px]" to="#">
              <CiHeart /> Favorites
            </Link>
          </li>
          <li className="p-4">
            <hr className="my-[15px]" />
          </li>
          <li className="mb-4 p-4 text-[20px]">
            {" "}
            <Link className="flex items-center gap-[15px]" to="#">
              <CiSquareAlert /> Help Center
            </Link>
          </li>
          <li className="mb-4 p-4 text-[20px]">
            {" "}
            <Link className="flex items-center gap-[15px]" to="#">
              <CiSettings /> Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#FFFFFF] border text-gray-700 flex justify-between items-center p-4">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div>
                <img
                  className="w-12"
                  src="https://cdn-icons-png.flaticon.com/512/11873/11873140.png"
                  alt=""
                />
              </div>
              <div>
                <select className="select select-secondary w-full max-w-xs border-0 focus:outline-0">
                  <option disabled selected>
                    {user.displayName}
                  </option>
                  <option>{user.email} </option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-[25px]">
              <button className="border p-3 text-2xl rounded-full">
                <IoMdNotificationsOutline />
              </button>
              <button onClick={()=> logoutuser()}>
                <span className="flex items-center gap-[10px] text-[20px] text-[#F15E4A]">
                  Log Out{" "}
                  <span className="bg-[#FFECEA] p-3 rounded-full">
                    <IoIosLogOut />
                  </span>
                </span>
              </button>
            </div>
          </div>
          <button
            className="text-gray-700 text-2xl md:hidden z-10"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <IoClose /> : <TiThMenu />}
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1  p-6 bg-gray-100">
          <TopSection></TopSection>
          <div className="max-w-full">
            <FetchersSlider></FetchersSlider>
            <BottomSection></BottomSection>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
