

const Register = () => {
  return (
    <div className="bg-green-500 h-screen flex justify-center items-center">
        <div className="bg-white w-[60%] mx-auto rounded-lg p-[50px]">
            <div>
                <h2 className="text-center text-4xl font-semibold">Register</h2>
                <div className="p-[50px]">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input placeholder="Enter Your name" className="w-full mt-[10px] border-b-2 focus:outline-none p-[10px]" type="text" />
                    </div>
                    <div className="mt-[25px]">
                        <label htmlFor="name">Email</label>
                        <input placeholder="Enter Your Email" className="w-full mt-[10px] border-b-2 focus:outline-none p-[10px]" type="email" />
                    </div>
                    <div className="mt-[25px]">
                        <label htmlFor="name">Password</label>
                        <input placeholder="Enter Your Password" className="w-full mt-[10px] border-b-2 focus:outline-none p-[10px]" type="password" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register