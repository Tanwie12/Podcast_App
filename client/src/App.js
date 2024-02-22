import React from "react"; 

// Import NextUI components and hooks
import { NextUIProvider } from "@nextui-org/react";
import { DrawerDefault } from "./components/Drawerbar";

// Import custom components
import ThemeSwitcher from "./utils/theme/ThemeSwitcher";
import { useSelector } from "react-redux";
import { Sidebar } from "./components/Sidebar";
import { MobileDrawer } from "./components/MobileDrawer";
import NavBar, { NavBar1 } from "./components/Navbar";
import Login, { LoginCard } from "./components/Signin";
import { BrowserRouter } from "react-router-dom";
import Signup from "./components/Signup";


export default function App() {

  // Get current theme from Redux store
  const Theme = useSelector((state) => state.theme.theme);

  console.log(Theme);

  return (
    <NextUIProvider>
      
      {/* Apply theme class to outer div */}
      <div className={Theme}>
        <BrowserRouter>
        <div className=" dark:bg-dark w-screen h-screen flex overflow-x-hidden overflow-y-hidden bg-light">
          <Sidebar/>
        <div className="flex-1 h-auto  border border-indigo-600  pe-5">
         <NavBar1/>
         <div className=" mt-1  flex border border-indigo-700 justify-center">
        <div className=" mt-5 flex justify-center items-center">
        {/* <LoginCard/> */}
        <Signup/>
        </div>
         </div>
       
        </div>
        
      </div>
      </BrowserRouter>
        </div>
      
     
    </NextUIProvider>
  );
}