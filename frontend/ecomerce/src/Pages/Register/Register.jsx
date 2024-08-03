import imageReg from "../../assets/regbg.png";
import "./Style.css";
const Register = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="bg-white w-[90%] mx-auto rounded-lg p-[50px]">
        <div className="grid grid-cols-2 gap-[25px]">
          <div>
            <h2 className="text-4xl font-semibold">LOGO</h2>
            <p>
              Sign In To Your Account elcome Back! By click the sign up button,
              you're agree to Zenitood Terms and Service and acknlowledge the
              Privacy and Policy
            </p>
            <div className="">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  placeholder="Enter Your name"
                  className="w-full mt-[10px] border-b-2 focus:outline-none p-[10px]"
                  type="text"
                />
              </div>
              <div className="mt-[25px]">
                <label htmlFor="name">Email</label>
                <input
                  placeholder="Enter Your Email"
                  className="w-full mt-[10px] border-b-2 focus:outline-none p-[10px]"
                  type="email"
                />
              </div>
              <div className="mt-[25px]">
                <label htmlFor="name">Password</label>
                <input
                  placeholder="Enter Your Password"
                  className="w-full mt-[10px] border-b-2 focus:outline-none p-[10px]"
                  type="password"
                />
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
