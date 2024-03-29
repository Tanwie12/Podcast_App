import React from "react";
import { useSelector } from "react-redux";
import { IconButton, Typography, List, ListItem, ListItemPrefix, Drawer, Card } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, PresentationChartBarIcon, MagnifyingGlassCircleIcon, StarIcon, ArrowUpOnSquareIcon, SunIcon, MoonIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import ThemeSwitcher from "../utils/theme/ThemeSwitcher";
import { Link } from "react-router-dom";


export function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const themeValue = useSelector((state) => state.theme.theme);
  
  
  return (
    <>
      <IconButton variant="text" size="lg" onClick={isDrawerOpen ? closeDrawer : openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card className="h-[calc(100vh-2rem)] w-full text-blue-600 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 flex items-center gap-4 p-4 text-primary">
            <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
            <Typography variant="h5">Podstream</Typography>
          </div>
          <List className="dark:text-gray-500">
          <Link to="/dashboard">
          <ListItem>
       
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            
            Dashboard
          
          </ListItem>
          </Link>
          <Link to="/search">
          <ListItem>
         
            <ListItemPrefix>
              <MagnifyingGlassCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
           
            Search
        
           
          </ListItem>
          </Link>
          <Link to="/favorites">
          <ListItem>
         
            <ListItemPrefix>
              <StarIcon className="h-5 w-5" />
            </ListItemPrefix>
           
            Favorites
           
           
          </ListItem>
          </Link>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <ArrowUpOnSquareIcon className="h-5 w-5" />
              </ListItemPrefix>
              Upload
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                {themeValue === "light" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </ListItemPrefix>
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
      </Drawer>
    </>
  );
}
