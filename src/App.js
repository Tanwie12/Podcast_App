import React from "react"; 
import { Route, Routes } from "react-router-dom";
// Import NextUI components and hooks
import { NextUIProvider } from "@nextui-org/react";



import { useSelector } from "react-redux";
import { Sidebar } from "./components/Sidebar";

import { NavBar1 } from "./components/Navbar";
import  { LoginCard } from "./components/Signin";
import { BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Podcast from "./pages/Podcast";

import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Showpodcast from "./pages/Showpodcast";




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
        <Routes>
          <Route index element={<Dashboard/>}/> 
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/podcast" element={<Podcast/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/Showpodcast/:podcastId" element={<Showpodcast/>}/>
        </Routes>
          
        <div className=" flex justify-center">
          {/* each individual componeent here for its rendering in it's own div  */}
  
        <div className=" mt-10 md:flex justify-center md:w-1/2 px-4 item-center">
       <Routes>
       <Route path="/login" element={<LoginCard/>} />
       </Routes>
        
       
        
        </div>
        </div>
         
       
        </div>
        
      </div>
      </BrowserRouter>
        </div>
      
     
    </NextUIProvider>
  );
}