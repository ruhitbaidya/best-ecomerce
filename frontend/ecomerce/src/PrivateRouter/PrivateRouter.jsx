import { useContext } from "react"
import { userContext } from "../UserAuth/UserAuth"
import { Navigate } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(userContext);
    if(loading){
        return <div className="h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if(user){
        return children
    }

    return <Navigate to="/"></Navigate>
}

export default PrivateRouter