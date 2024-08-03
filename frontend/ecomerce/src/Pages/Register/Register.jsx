import imageReg from "../../assets/regbg.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Style.css";
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from "react";
import { userContext } from "../../UserAuth/UserAuth";

const Register = () => {
  const {signinemailpassowrd} = useContext(userContext);
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
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="bg-white w-[90%] mx-auto rounded-lg p-[50px]">
        <div className="grid grid-cols-2 gap-[25px]">
          <div>
            <h2 className="text-4xl font-semibold text-[#4285F3] mb-[10px]">
              LOGO
            </h2>
            <h3 className="font-bold text-3xl">Sign Up To Your Account </h3>
            <p className="text-[#5C635A] mt-[10px] leading-7">
              elcome Back! By click the sign up button, you are agree to
              Zenitood Terms and Service and acknlowledge the <br />
              <Link to="" className="text-[#4285F3]">
                Privacy and Policy
              </Link>
            </p>
            <ToastContainer />
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
                  <input
                    {...register("password", { required: true })}
                    className="w-full focus:outline-none p-[10px] border rounded-lg mt-[7px]"
                    type="password"
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <span className="text-red-500">Please Enter Password</span>
                  )}
                </div>
                <div className="mb-[18px]">
                  <label htmlFor="">Confirm Password</label>
                  <input
                    {...register("confirmPassword", { required: true })}
                    className="w-full focus:outline-none p-[10px] border rounded-lg mt-[7px]"
                    type="password"
                    placeholder="Re-type password"
                  />
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
