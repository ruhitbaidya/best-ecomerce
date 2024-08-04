import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import imageReg from "../../assets/regbg.png";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
import { useContext, useState } from "react";
import { userContext } from "../../UserAuth/UserAuth";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import imageRes from "../../assets/responsive.png";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { signInUser, signinWithGoogle } = useContext(userContext);
  const handelGoogleLogin = () => {
    signinWithGoogle()
      .then((res) => {
        if (res.user) {
          toast.success("Account Login SuccessFully");
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        toast.error(err.message.split(": ")[1]);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((data) => {
        console.log(data.user);
        if (data.user) {
          toast.success("Account Login SuccessFully");
          navigate("/dashboard");
          reset();
        }
      })
      .catch((err) => {
        // console.log(err.message.split(": ")[1])
        toast.error(err.message.split(": ")[1]);
      });
  };
  return (
    <div className="bg-white lg:h-screen flex justify-center items-center">
      <div className="bg-white lg:w-[90%] mx-auto rounded-lg lg:p-[20px] lg:p-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
          <div className="block md:hidden relative h-[500px]">
            <img className="h-[100%] w-[100%] rounded-lg" src={imageRes} alt="" />
            <div className="absolute top-32 left-0 right-0 text-center">
              <h2 className="text-4xl font-semibold text-[#4285F3] mb-[10px]">
                LOGO
              </h2>
              <h3 className="font-bold text-2xl text-center">Log In To Your Account </h3>
              <p className="text-[#f0f0f0] mt-[10px] leading-7">
                Welcome Back! Select a method to log in:
              </p>
            </div>
          </div>
          {/* this code for responsive  */}
          <div className="lg:hidden -mt-[200px] z-10 p-[20px] bg-white rounded-3xl">
            <h2 className="hidden lg:block text-4xl font-semibold text-[#4285F3] mb-[10px]">
              LOGO
            </h2>
            <h3 className="font-bold text-3xl hidden lg:block">Log In To Your Account </h3>
            <p className="text-[#5C635A] mt-[10px] leading-7 hidden lg:block">
              Welcome Back! Select a method to log in:
            </p>
            <div className="flex justify-center items-center gap-[25px] mt-[20px]">
              <button
                onClick={handelGoogleLogin}
                className="flex px-[45px] py-[15px] googlebg justify-center items-center gap-[15px]"
              >
                <img
                  className="w-4 h-4"
                  src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                  alt=""
                />{" "}
                Google
              </button>
              <button className="flex facebg px-[45px] py-[15px] justify-center items-center gap-[15px]">
                {" "}
                <img
                  className="w-4 h-4"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                  alt=""
                />{" "}
                Facebook
              </button>
            </div>
            <div className="divider text-[#5C635A] my-[20px] w-[100%] lg:w-[73%] mx-auto">
              Or Continue with Email
            </div>
            <ToastContainer />
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
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
                      type={showPass ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <button
                      onClick={() => setShowPass(!showPass)}
                      className="absolute top-5 right-3"
                    >
                      {showPass ? <FaEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="text-red-500">
                      Please Enter Your Password
                    </span>
                  )}
                </div>
                <div className="text-[#b8babd] flex justify-between items-center">
                  <label htmlFor="">
                    <input
                      className="mr-[10px]"
                      type="checkbox"
                      name="agree"
                      id=""
                    />
                    Remember me
                  </label>
                  <Link to="" className="text-[#4285F3]">
                    Forgot password?
                  </Link>
                </div>
                <div className="text-center my-[20px]">
                  <button className="py-[16px] px-[40px] bg-[#4285F3] w-[50%] text-white rounded-lg mx-auto">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p>
                  Don’t Have an Account?{" "}
                  <Link to="/register" className="text-[#4285F3]">
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <h2 className="hidden lg:block text-4xl font-semibold text-[#4285F3] mb-[10px]">
              LOGO
            </h2>
            <h3 className="font-bold text-3xl hidden lg:block">Log In To Your Account </h3>
            <p className="text-[#5C635A] mt-[10px] leading-7 hidden lg:block">
              Welcome Back! Select a method to log in:
            </p>
            <div className="flex justify-center items-center gap-[25px] mt-[20px]">
              <button
                onClick={handelGoogleLogin}
                className="flex px-[45px] py-[15px] googlebg justify-center items-center gap-[15px]"
              >
                <img
                  className="w-4 h-4"
                  src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                  alt=""
                />{" "}
                Google
              </button>
              <button className="flex facebg px-[45px] py-[15px] justify-center items-center gap-[15px]">
                {" "}
                <img
                  className="w-4 h-4"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                  alt=""
                />{" "}
                Facebook
              </button>
            </div>
            <div className="divider text-[#5C635A] my-[20px] w-[100%] lg:w-[73%] mx-auto">
              Or Continue with Email
            </div>
            <ToastContainer />
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
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
                      type={showPass ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <button
                      onClick={() => setShowPass(!showPass)}
                      className="absolute top-5 right-3"
                    >
                      {showPass ? <FaEye /> : <FaRegEyeSlash />}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="text-red-500">
                      Please Enter Your Password
                    </span>
                  )}
                </div>
                <div className="text-[#b8babd] flex justify-between items-center">
                  <label htmlFor="">
                    <input
                      className="mr-[10px]"
                      type="checkbox"
                      name="agree"
                      id=""
                    />
                    Remember me
                  </label>
                  <Link to="" className="text-[#4285F3]">
                    Forgot password?
                  </Link>
                </div>
                <div className="text-center my-[20px]">
                  <button className="py-[16px] px-[40px] bg-[#4285F3] w-[50%] text-white rounded-lg mx-auto">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p>
                  Don’t Have an Account?{" "}
                  <Link to="/register" className="text-[#4285F3]">
                    Create Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <img src={imageReg} alt="" />
              <div className="text-center-div">
                <p className="text-white text-[18px]">
                  <Link to="/register" className="text-[#4285F3]">
                    Sign In{" "}
                  </Link>
                  to view all the massage therapists
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
