
import React from "react";
import { IconButton } from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { changeValue } from "../store/Sidebarslice";

export function DrawerDefault() {
  const sidebarValue = useSelector(state => state.sidebar.value);
  const dispatch = useDispatch();

  console.log("first" + sidebarValue);

  const toggleSidebar = () => {
    dispatch(changeValue(!sidebarValue));
  };

  return (
    <IconButton variant="text" size="lg" onClick={toggleSidebar}>
      <Bars3Icon className="h-8 w-8 stroke-2" />
    </IconButton>
  );
}