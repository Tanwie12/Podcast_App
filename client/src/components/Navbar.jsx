import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  
} from "@material-tailwind/react";
import { Link, Button as NButton } from "@nextui-org/react";
import { DrawerDefault } from "./Drawerbar";
import { UserCircleIcon } from "@heroicons/react/24/outline";
export function NavBar1() {
 
 
  
 
 
  return (
    <div className="max-h-[768px] w-[calc(100%+48px)]  bg-background">
      <Navbar className="sticky top-0 z-10 h-max max-w-full  bg-background rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-primary">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <DrawerDefault/>
          </Typography>
          <div className="flex items-center gap-4">
           
            <div className="flex items-center gap-x-1">
              
              <NButton as={Link} color="primary" href="#" variant="flat">
                <UserCircleIcon className="h-5 w-5"/>
           Login
          </NButton>
            </div>
            
          </div>
        </div>
       
      </Navbar>
     
    </div>
  );
}