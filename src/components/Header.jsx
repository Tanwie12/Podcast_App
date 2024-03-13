import React from "react";
import {
  Navbar,

  Typography,
 
} from "@material-tailwind/react";
import { Link, Button as NButton } from "@nextui-org/react";
import { DrawerDefault } from "./Drawerbar";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";
import { Settings } from "@mui/icons-material";


export default function Header() {
  return (
    <div className="max-h-[768px] w-[calc(100%+48px)]  bg-background">
      <Navbar className="sticky top-0 z-10 h-max max-w-full  dark:bg-gray-500 rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-around text-primary">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <DrawerDefault/>
          </Typography>
          <Typography>
            Accounts
          </Typography>
          <div name="div for search " className="flex items-center gap-4">
            
          </div>
          <div className="w-5 h-4">
<BellIcon className="W-5 H-5"/>
          </div>
          <div className="w-5 h-4">
<Settings className="w-5 h-5"/>
</div>
        </div>
       
      </Navbar>
      </div>
  )
}
