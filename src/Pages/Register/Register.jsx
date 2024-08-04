import imageReg from "../../assets/regbg.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import { ToastContainer, toast } from 'react-toastify';
import { useContext, useState } from "react";
import { userContext } from "../../UserAuth/UserAuth";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import imageRes from "../../assets/regbg.png"
const Register = () => {
  const [showPass, setShowPass] = useState(false)
  const [showPass2, setShowPass2] = useState(false)
  const {signinemailpassowrd} = useContext(userContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    if(data.permission){
      if(data.password === data.confirmPassword){
        signinemailpassowrd(data.email, data.password)
        .then((data)=>{
          console.log(data.user)
          if(data.user){
            toast.success("Account Create SuccessFully")
            navigate("/dashboard")
            reset();
          }
        })
        .catch((err)=>{
          // console.log(err.message.split(": ")[1])
          toast.error(err.message.split(": ")[1])
        })

      }else{
        toast.error("Both Password Not Match")
      }
    }else{
      toast.error("Give Permission")
    }
  };
 

  return (
    <div className="bg-white lg:h-screen flex justify-center items-center">
      <div className="bg-white lg:w-[90%] mx-auto rounded-lg lg:p-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
        <div className="block md:hidden relative h-[500px]">
            <img className="h-[100%] w-[100%] rounded-lg" src={imageRes} alt="" />
            <div className="absolute top-32 left-0 right-0 text-center">
              <h2 className="text-4xl font-semibold text-[#4285F3] mb-[10px]">
                LOGO
              </h2>
              <h3 className="font-bold text-2xl text-center">Sign Up To Your Account </h3>
              <p className="text-[#f0f0f0] mt-[10px] leading-7">
              elcome Back! By click the sign up button, you are agree to
              Zenitood Terms and Service and acknlowledge the
              </p>
            </div>
          </div>
          <div className="block md:hidden z-10 -mt-[200px] p-[10px] bg-white rounded-3xl">
            <h2 className="hidden lg:block text-4xl font-semibold text-[#4285F3] mb-[10px]">
              LOGO
            </h2>
            <h3 className=" font-bold text-2xl text-center mb-[30px] lg:text-3xl">Sign Up To Your Account </h3>
            <p className="text-[#5C635A] mt-[10px] leading-7 hidden lg:block">
              elcome Back! By click the sign up button, you are agree to
              Zenitood Terms and Service and acknlowledge the <br />
              <Link to="" className="text-[#4285F3]">
                Privacy and Policy
              </Link>
            </p>
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-[20px]">
                  <label htmlFor="">Name</label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full focus:outline-none p-[10px] border rounded-lg mt-[7px]"
                    type="text"
                    placeholder="@username"
                  />
                  {errors.name && (
                    <span className="text-red-500">Please Enter Your Name</span>
                  )}
                </div>
                <div className="mb-[18px]">
                  <label htmlFor="">Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="w-full focus:outline-none p-[10px] border rounded-lg mt-[7px]"
                    type="email"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <span className="text-red-500">
                      Please Enter Your Email
                    </span>
                  )}
                </div>
                <div className="mb-[18px]">
                  <label htmlFor="">Password</label>
                 <div className="relative">
                 <input
                    {...register("password", { required: true })}
                    className="w-full focus:outline-none p-[10px] border rounded-lg mt-[7px]"
                    type={showPass2 ? 'text' : 'password'}
                    placeholder="Enter your password"
                  />
                  <button onClick={()=> setShowPass2(!showPass2)} className="absolute top-5 right-3">{showPass2 ? <FaEye /> : <FaRegEyeSlash />}</button>
                 </div>
                  
                  {errors.password && (
                    <span className="text-red-500">Please Enter Password</span>
                  )}
                </div>
                <div className="mb-[18px]">
                  <label htmlFor="">Confirm Password</label>
                  <div className="relative">
                  <input
                    {...register("confirmPassword", { required: true })}
                    className="w-full focus:outline-none p-[10px] border rounded-lg mt-[7px]"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Re-type password"
                  />
                  <button onClick={()=> setShowPass(!showPass)} className="absolute top-5 right-3">{showPass ? <FaEye /> : <FaRegEyeSlash />}</button>
                  </div>
                  {errors.confirmPassword && (
                    <span className="text-red-500">
                      Please Enter Confirm Password
                    </span>
                  )}
                </div>
                <div className="text-[#4285F3]">
                  <label htmlFor="">
                    <input
                      className="mr-[10px]"
                      type="checkbox"
                      {...register('permission')}
                    />
                    Accept Terms of Service
                  </label>
                </div>
                <div className="text-center my-[20px]">
                  <button className="py-[16px] px-[40px] bg-[#4285F3] w-[50%] text-white rounded-lg mx-auto">
                    Sign up
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p>
                  Already Have an Account?{" "}
                  <Link to="/" className="text-[#4285F3]">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="hidden lg:block text-4xl font-semibold text-[#4285F3] mb-[10px]">
              LOGO
            </h2>
            <h3 className="hidden lg:block font-bold text-3xl">Sign Up To Your Account </h3>
            <p className="text-[#5C635A] mt-[10px] leading-7 hidden lg:block">
              elcome Back! By click the sign up button, you are agree to
              Zenitood Terms and Service and acknlowledge the <br />
              <Link to="" className="text-[#4285F3]">
                Privacy and Policy
              </Link>
            </p>
            <ToastContainer />
            <div className="hidden lg:block">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-[20px]">
                  <label htmlFor="">Name</label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full focus:outline-none p-[10px] border rounded-lg mt-[7px]"
                    type="text"
                    placeholder="@username"
                  />
                  {errors.name && (
                    <span className="text-red-500">Please Enter Your Name</span>
                  )}
                </div>
                <div className="mb-[18px]">
                  <label htmlFor="">Email</label>
                  <input
                    {...register("email", { required: true })}
                    className="w-full focus:outline-none p-[10px] border rounded-lg mt-[7px]"
                    type="email"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <span className="text-red-500">
                      Please Enter Your Email
                    </span>
                  )}
                </div>
                <div className="mb-[18px]">
                  <label htmlFor="">Password</label>
                 <div className="relative">
                 <input
                    {...register("password", { required: true })}
                    className="w-full focus:outline-none p-[10px] border rounded-lg mt-[7px]"
                    type={showPass2 ? 'text' : 'password'}
                    placeholder="Enter your password"
                  />
                  <button onClick={()=> setShowPass2(!showPass2)} className="absolute top-5 right-3">{showPass2 ? <FaEye /> : <FaRegEyeSlash />}</button>
                 </div>
                  
                  {errors.password && (
                    <span className="text-red-500">Please Enter Password</span>
                  )}
                </div>
                <div className="mb-[18px]">
                  <label htmlFor="">Confirm Password</label>
                  <div className="relative">
                  <input
                    {...register("confirmPassword", { required: true })}
                    className="w-full focus:outline-none p-[10px] border rounded-lg mt-[7px]"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Re-type password"
                  />
                  <button onClick={()=> setShowPass(!showPass)} className="absolute top-5 right-3">{showPass ? <FaEye /> : <FaRegEyeSlash />}</button>
                  </div>
                  {errors.confirmPassword && (
                    <span className="text-red-500">
                      Please Enter Confirm Password
                    </span>
                  )}
                </div>
                <div className="text-[#4285F3]">
                  <label htmlFor="">
                    <input
                      className="mr-[10px]"
                      type="checkbox"
                      {...register('permission')}
                    />
                    Accept Terms of Service
                  </label>
                </div>
                <div className="text-center my-[20px]">
                  <button className="py-[16px] px-[40px] bg-[#4285F3] w-[50%] text-white rounded-lg mx-auto">
                    Sign up
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p>
                  Already Have an Account?{" "}
                  <Link to="/" className="text-[#4285F3]">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <img src={imageReg} alt="" />
              <div className="text-center-div">
                <p className="text-[#156BCA] text-[18px]">Create Account</p>
                <p className="text-white text-[18px]">
                  Fill in Your Information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
