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
import Login from "./components/Signin";

export default function App() {

  // Get current theme from Redux store
  const Theme = useSelector((state) => state.theme.theme);

  console.log(Theme);

  return (
    <NextUIProvider>
      
      {/* Apply theme class to outer div */}
      <div className={Theme}>

        <div className="dark:bg-dark overflow-hidden h-screen bg-light flex pt-2">
          
         {/* display on large screens */}
      <div className="hidden lg:flex">
      <Sidebar />
      </div>
<NavBar1/>
        </div>
      </div>
<Login/>
    </NextUIProvider>
  );
}