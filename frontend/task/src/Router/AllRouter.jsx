import {createBrowserRouter} from "react-router-dom"
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Sliders from "../Pages/Dashboard/FetcherSlider/PersonSlider";
import BottomSlider from "../Pages/Dashboard/BottomSilder/BottomSlider";

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
   path : "/slide",
   element : <BottomSlider></BottomSlider>
   },
   {
    path : "/dashboard",
    element : <PrivateRouter>
      <Dashboard></Dashboard>
    </PrivateRouter>
   }


])

export default router;