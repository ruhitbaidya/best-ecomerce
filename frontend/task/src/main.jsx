import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/AllRouter.jsx";
import UserAuth from "./UserAuth/UserAuth.jsx";
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuth>
      <RouterProvider router={router}></RouterProvider>
    </UserAuth>
  </React.StrictMode>
);
