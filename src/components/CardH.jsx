import React from "react";
import { User, Button as NButton } from "@nextui-org/react";
import { HeartIcon } from "@heroicons/react/24/solid";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { selectCard } from "../store/Sidebarslice";

import { PlayIcon } from "@heroicons/react/24/outline";
   
  export function HorizontalCard() {
    const [liked, setLiked] = React.useState(false);
    const data=useSelector(selectCard)
    
    return (
      <Card className="w-full   flex-col md:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 md:w-1/2 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
           alt=""
            className="h-full w-full  object-cover"
          />
        </CardHeader>
        <CardBody>
        <NButton
            isIconOnly
            className="absolute top-3 right-3 text-default-900/60 text-red-200 bg-transparent transition duration-300 transform"
            radius="full"
            variant="light"
            onPress={() => setLiked((v) => !v)}
          >
            <HeartIcon className={liked ? "text-red-500" : "text-gray-500"} />
          </NButton>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            startups
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Lyft launching cross-platform service this week
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software company
            selling licenses. Yet its own business model disruption is only part
            of the story
          </Typography>
          <div name="div for buttons" className="flex flex-wrap gap-2">
          <Button disabled={true} size="sm" color="primary" ripple={false} className="rounded-full">
      sports
    </Button>
    <Button disabled={true} size="sm" color="primary" ripple={false} className="rounded-full">
      business
    </Button>
    <Button disabled={true} size="sm" color="primary" ripple={false} className="rounded-full">
     entertainment
    </Button>
          </div>
          <div className="mx-0 flex m-5  items-center space-x-4">
            <User
            name={data.author}
              radius="full"
              size="small"
              src={data.avatar}
            />
            <Typography color="gray" variant="small" className="text-sm">
              <span className="text-3xl">.</span> {data.views}
            </Typography>
            <Typography color="gray" variant="small" className="text-sm">
              <span className="text-3xl">.</span> {data.views}
            </Typography>
            <PlayIcon className="h-4 w-4" />
          </div>
          <a href="https://google.com" className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }