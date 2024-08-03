import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import imageReg from "../../assets/regbg.png";
import {Link} from "react-router-dom"
import "./Style.css";
import { useContext } from "react";
import { userContext } from "../../UserAuth/UserAuth";
const Login = () => {
  const {signInUser} = useContext(userContext)
  return (
    <div className="bg-white h-screen flex justify-center items-center">
    <div className="bg-white w-[90%] mx-auto rounded-lg p-[50px]">
      <div className="grid grid-cols-2 gap-[25px]">
        <div>
          <h2 className="text-4xl font-semibold text-[#4285F3] mb-[10px]">LOGO</h2>
          <h3 className="font-bold text-3xl">Log In To Your Account </h3>
          <p className="text-[#5C635A] mt-[10px] leading-7">
          Welcome Back! Select a method to log in:
          </p>
          <div className="flex justify-center items-center gap-[25px] mt-[20px]">
            <button className="flex px-[45px] py-[15px] googlebg justify-center items-center gap-[15px]"><img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="" />  Google</button>
            <button className="flex facebg px-[45px] py-[15px] justify-center items-center gap-[15px]"> <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" /> Facebook</button>
          </div>
          <div className="divider text-[#5C635A] my-[20px] w-[73%] mx-auto">Or Continue with Email</div>
          <div className="">
            <form>
              <div className="mb-[18px]">
                  <label htmlFor="">Email</label>
                  <input className="w-full focus:outline-none p-[10px] border rounded-lg mt-[7px]" type="email" placeholder="Enter your email" />
              </div>
              <div className="mb-[18px]">
                  <label htmlFor="">Password</label>
                  <input className="w-full focus:outline-none p-[10px] border rounded-lg mt-[7px]" type="password" placeholder="Enter your password" />
              </div>
              <div className="text-[#b8babd] flex justify-between items-center">
                  <label htmlFor="">
                  <input className="mr-[10px]" type="checkbox" name="agree" id="" />
                  Remember me
                  </label>
                  <Link to="" className="text-[#4285F3]">Forgot password?</Link>
              </div>
              <div className="text-center my-[20px]">
                  <button className="py-[16px] px-[40px] bg-[#4285F3] w-[50%] text-white rounded-lg mx-auto">Sign In</button>
              </div>
            </form>
            <div className="text-center">
              <p>Don’t Have an Account?  <Link to="/register" className="text-[#4285F3]">Create Account</Link></p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img src={imageReg} alt="" />
            <div className="text-center-div">
              <p className="text-white text-[18px]">
                <Link to="/register" className="text-[#4285F3]">Sign In </Link>
               to view all the massage therapists
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login