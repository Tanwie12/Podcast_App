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
import Dashboard from "./pages/Dashboard";
import Podcast from "./pages/Podcast";
import { Favorite } from "@mui/icons-material";
import Favorites from "./pages/Favorites";



export default function App() {

  // Get current theme from Redux store
  const Theme = useSelector((state) => state.theme.theme);

  console.log(Theme);

  return (
    <NextUIProvider>
      
      {/* Apply theme class to outer div */}
      <div className={Theme}>
        <BrowserRouter>
        <div className=" dark:bg-dark bg-background/60 w-screen h-screen flex overflow-hidden ">
          <Sidebar/>
         
        <div className="flex-1 h-screen  border border-green-200">
          <div className="  md:mr-5 mr-8">
          <NavBar1/>
          </div>
        
          {/* <Podcast/> */}
          
        {/* components section, where components will be rendered  */}
        <Dashboard/>
     {/* <Favorites/> */}
        <div className="border border-blue-400 flex justify-center">
          {/* each individual componeent here for its rendering in it's own div  */}
  
        <div className=" mt-10 md:flex justify-center md:w-1/2 px-4 border item-center border-red-400">
        {/* <LoginCard/> */}
        
        </div>
        </div>
         
       
        </div>
        
      </div>
      </BrowserRouter>
        </div>
      
     
    </NextUIProvider>
  );
}