import { BrowserRouter, Routes, Route, createBrowserRouter, Link, NavLink, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./applayout";
import LandingPage from "./components/screens/landingpage";
import Dashboard from "./components/screens/dashboard";
import Auth from "./components/screens/auth";
import Redirect from "./components/screens/redirect";
import Display from "./components/screens/display";

const router = createBrowserRouter([
    {
      element:<AppLayout/>,
      children:[
        {
          path: "/",
          element: <LandingPage/>
        },
        {
          path: "/dashboard",
          element: <Dashboard/>
        },
        {
          path: "/auth",
          element: <Auth/>
        },
        {
          path: "/:id",
          element: <Redirect/>
        },
        {
          path: "/display",
          element: <Display/>
        },


      ]
    }

])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}
export default App;
