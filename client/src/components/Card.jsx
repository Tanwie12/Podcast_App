import React, { useCallback,} from "react";
import {
 
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button, User,Card } from "@nextui-org/react";
import {  PlayCircleIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {  changeFavoriteValue, selectFavoriteValue } from "../store/Sidebarslice";
import { useDispatch, useSelector } from "react-redux";


export default function BookingCard({data}) {
  const favorite=useSelector(selectFavoriteValue);
  const dispatch=useDispatch()
 
  const [liked, setLiked] = React.useState(false);
  const [showHeadphones, setShowHeadphones] = React.useState(false);
  const Content = "Audio";
 const toggleFavorite=useCallback(()=>{
  const newLiked=liked===true?false:true;
  setLiked(newLiked);
  dispatch(changeFavoriteValue(newLiked))
  console.log("this is the favorite___ "+favorite)
  console.log(" like+++"+liked)
 
 },[liked, favorite,dispatch])
    

  
  return (
    <>
      <Card
        className="w-64 dark:text-white max-w-[26rem] bg-transparent transform transition duration-300 hover:shadow-xl mt-5 hover:scale-up-100"
        onMouseEnter={() => setShowHeadphones(true)}
        onMouseLeave={() => setShowHeadphones(false)}
        
      >
         <Button
            isIconOnly
            className="absolute top-3 right-3 z-10 text-default-900/60 text-red-200 bg-transparent transition duration-300 transform"
            radius="full"
            variant="light"
            onPress={toggleFavorite}
          >
            <HeartIcon className={liked ? "text-red-500" : "text-gray-500"} />
          </Button>
          <Link to={`/podcast/${data.title}`}>
        <CardHeader floated={false} color="blue-gray">
          <img
            src={data.image}
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
         
          
     
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="" className="font-medium">
             {data.title}
            </Typography>
            {showHeadphones && Content === "Audio" ? (
              <Button
                isIconOnly
                className="hover:bg-blue-gray-600 absolute right-3 text-default-900/60 text-red-200 bg-transparent w-16 h-16 transition duration-300 transform"
                radius="full"
                variant="light"
              >
                <FontAwesomeIcon
                  icon={faHeadphonesAlt}
                  size="3x"
                  className=""
                />
              </Button>
            ) : Content === "Video" && showHeadphones ? (
              <Button
                isIconOnly
                className="hover:bg-blue-gray-600 absolute right-3 text-default-900/60 text-red-200 bg-transparent h-16 w-16 transition duration-300 transform"
                radius="full"
                variant="light"
              >
                <PlayCircleIcon className="text-gray-500 h-32 w-16" />
              </Button>
            ) : null}
          </div>
          <Typography color="gray">
            {data.description}
          </Typography>
     
        </CardBody>
        <CardFooter className="pt-3">
          <div className="mx-0 flex items-center gap-4">
            <User
              name={data.author}
              radius="full"
              size="small"
              src={data.avatar}
            />
            <Typography color="gray" variant="small" className="text-sm">
              <span className="text-3xl">.</span> {data.views}
            </Typography>
          </div>
        </CardFooter>
        </Link>
      </Card>
     
  
    
    </>
  );
}
