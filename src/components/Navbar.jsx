import React from "react";
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Button as NButton } from "@nextui-org/react";
import { DrawerDefault } from "./Drawerbar";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link, Outlet,useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";

export function NavBar1() {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [logoutM]=useLogoutMutation()
const handlePress=async()=>{
  try{
    await logoutM().unwrap()
    dispatch(logout())
    navigate('/')
  }catch(err){
    console.log(err)
  }
}


  return (
    <div className="max-h-[768px] w-[calc(100%+48px)] bg-background">
      <Navbar className="sticky top-0 z-10 h-max max-w-full dark:bg-gray-500 rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-primary">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <DrawerDefault />
          </Typography>
          {userInfo ? (
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer text-black dark:text-white py-1.5 font-medium"
            >
              Welcome {userInfo.name}
            </Typography>
          ) : null}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              {userInfo ? (
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">{userInfo.email}</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Profile</DropdownItem>
                    <DropdownItem key="team_settings">Uploads</DropdownItem>
                   
                    <DropdownItem key="logout" color="danger" onPress={handlePress}>
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <NButton as={Link} color="primary" href="#" variant="flat">
                  <UserCircleIcon className="h-5 w-5" />
                  <Link to="/login">Login</Link>
                </NButton>
              )}
            </div>
          </div>
        </div>
      </Navbar>
      <Outlet />
    </div>
  );
}
