import React from "react";
import { Card } from "@nextui-org/react";
import { useSelector } from "react-redux";
import ThemeSwitcher from "../utils/theme/ThemeSwitcher";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ArrowLeftStartOnRectangleIcon,
  StarIcon,
  MoonIcon,
  ArrowUpOnSquareIcon,
  MagnifyingGlassIcon as MagnifyingGlassCircleIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

export function Sidebar() {
  const sidebarvalue = useSelector((state) => state.sidebar.value);
 const Themevalue=useSelector((state) => state.theme.theme);
  const icons = {
    "light": <SunIcon className="h-5 w-5" />,
    "dark": <MoonIcon className="h-5 w-5" />,
  };
console.log(sidebarvalue+"for real")
  return (
    <>
      <Card
        className={`h-[calc(100vh-2rem)] w-0 md:w-full md:p-4 text-blue-600 max-w-[20rem]   shadow-xl shadow-blue-gray-900/5 ${
          sidebarvalue ? "" : "hidden"
        }`}
      >
        <div className="mb-2 flex items-center gap-4 p-4 text-primary">
          <img
            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
            alt="brand"
            className="h-8 w-8"
          />
          <Typography variant="h5">Podstream</Typography>
        </div>
        <List className="dark:text-gray-500">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <MagnifyingGlassCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Search
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <StarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Favorites
          </ListItem>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem>
            <ListItemPrefix>
              <ArrowUpOnSquareIcon className="h-5 w-5" />
            </ListItemPrefix>
            Upload
          </ListItem>
          <ListItem>
            <ListItemPrefix>{icons[Themevalue]}</ListItemPrefix>
            Mode
            <ThemeSwitcher />
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Logout
          </ListItem>
        </List>
      </Card>
    </>
  );
}
