import {createBrowserRouter} from "react-router-dom"
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

let router = createBrowserRouter([
   {
    path : "/",
    element : <Login></Login>
   },
   {
    path : "/register",
    element : <Register></Register>
   },
   {
    path : "/dashboard",
    element : <PrivateRouter>
      <Dashboard></Dashboard>
    </PrivateRouter>
   }


])

export default router;