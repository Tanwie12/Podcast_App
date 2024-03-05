import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Button, User } from "@nextui-org/react";
import { HeartIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";


export default function BookingCard({data}) {
  const [liked, setLiked] = React.useState(false);
  const [showHeadphones, setShowHeadphones] = React.useState(false);
  const Content = "Audio";
  
  return (
    <>
   
      <Card
        className="w-64 max-w-[26rem] bg-transparent hover:shadow-blue-gray-800 transform transition duration-300 hover:shadow-xl mt-5 hover:scale-105"
        onMouseEnter={() => setShowHeadphones(true)}
        onMouseLeave={() => setShowHeadphones(false)}
      >
        <CardHeader floated={false} color="blue-gray">
          <img
            src={data.image}
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Button
            isIconOnly
            className="absolute top-3 right-3 text-default-900/60 text-red-200 bg-transparent transition duration-300 transform"
            radius="full"
            variant="light"
            onPress={() => setLiked((v) => !v)}
          >
            <HeartIcon className={liked ? "text-red-500" : "text-gray-500"} />
          </Button>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
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
      </Card>
  
    
    </>
  );
}
