import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeValue } from "../store/Sidebarslice";
import { MobileDrawer } from "./MobileDrawer";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

import { Button} from 'antd';
export function DrawerDefault() {
  const sidebarValue = useSelector(state => state.sidebar.value);
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = React.useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    dispatch(changeValue(!sidebarValue));
  };

  return (
    <><div className="md:hidden">
      {/* Render the mobile drawer only on smaller screens */}
      <MobileDrawer />
    </div><div className="hidden md:block">
        {/* Render the desktop drawer only on larger screens */}
        {/* <IconButton variant="text" className="dark:text-white" size="lg" onClick={toggleSidebar}>
          <Bars3Icon className="h-8 w-8 stroke-2" />
          
        </IconButton> */}
         <Button
      className=''
            type="text"
            icon={collapsed ? <Bars3BottomLeftIcon className="w-10 dark:text-white h-10" /> : <Bars3BottomRightIcon className="w-10 dark:text-white h-10"/>}
            onClick={toggleSidebar}
            style={{
              fontSize: '20px',
              width: 64,
              height: 64,
            }}
          /> 
      
      </div></>
  );
}
