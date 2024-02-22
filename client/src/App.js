import React from "react"; 

// Import NextUI components and hooks
import { NextUIProvider } from "@nextui-org/react";
import { DrawerDefault } from "./components/Drawerbar";

// Import custom components
import ThemeSwitcher from "./utils/theme/ThemeSwitcher";
import { useSelector } from "react-redux";
import { Sidebar } from "./components/Sidebar";
import { MobileDrawer } from "./components/MobileDrawer";

export default function App() {

  // Get current theme from Redux store
  const Theme = useSelector((state) => state.theme.theme);

  console.log(Theme);

  return (
    <NextUIProvider>
      
      {/* Apply theme class to outer div */}
      <div className={Theme}>

        <div className="dark:bg-dark overflow-hidden h-screen bg-light flex">
         {/* display on large screens */}
      <div className="hidden lg:flex">
      <Sidebar />
        <div className=" w-10"></div>
      <DrawerDefault />
      </div>
      {/* side for mobile devices */}
<div className="lg:hidden block">
  <MobileDrawer/>
</div>
        </div>
      </div>

    </NextUIProvider>
  );
}