import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import { Provider } from "react-redux";
import store from "./Services/Redux-Service/store";


import { ChakraProvider } from "@chakra-ui/react";
import Chat_body from "./Pages/Customer/main_body/Chat_body/Chat_body";
import Starting_page from "./Pages/Customer/Login Page/Starting_page";
import TestingPage from "./Pages/Testing";


 const routerConfig = createBrowserRouter([
   {
     path: "/",
     element: <Chat_body/>,
   },
   {
     path: "login",
     element: <Starting_page/>,
   },
  // {
  //   path: "/",
  //   element: <TestingPage/>,
  // },
//   {
//     path: "browseResturant",
//     element: <Browse1 />,
//   },
//   {
//     path: "/contactus",
//     element: <Contactus />,
//   },

//   // Resturant part

//   {
//     path: "resturantDashboard",
//     element: <ResturantDashboard />,
//   },
//   {
//     path: "resturantMenu",
//     element: <ResturantMenu />,
//   },
//   {
//     path: "resturantOrderList",
//     element: <ResturantOrderList />,
//   },
//   {
//     path: "aboutUs",
//     element: <AboutUs />,
//   },

//   //Admin part
//   {
//     path: "adminnav",
//     element: <AdminHeader />,
//   },
//   {
//     path: "/admin",
//     element: <AdminDashboard />,
//   },
//   {
//     path: "/adminRestaurant",
//     element: <AdminRestaurant />,
//   },
//   {
//     path: "/adminRider",
//     element: <Adminrider />,
//   },
//   {
//     path: "/adminreviews",
//     element: <Adminreview />,
//   },
//   {
//     path: "/riderdashboard",
//     element: <Riderdashboard />,
//   },
//   {
//     path: "/riderprofile",
//     element: <Riderprofile />,
//   },
 ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
   
    <ChakraProvider>
    {/* <App /> */}
      <RouterProvider router={routerConfig} />
    </ChakraProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
