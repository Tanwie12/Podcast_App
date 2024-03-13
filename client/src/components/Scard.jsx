import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { Typography } from "@material-tailwind/react";

export default function Scard({ data }) {
  const item = data;

  return (
    <div className="transform transition w-36 duration-300 hover:shadow-xl hover:scale-105">
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="relative overflow-visible p-0">
          <div className="w-full h-32 relative">
            <Image
              shadow="sm"
              radius="lg"
              height={'2rem'}
              
              alt={item.title}
              className=" h-36 w-36"
              src={item.img}
            />
            <div className="absolute top-2 left-0 right-8 flex justify-center items-center">
              <Typography className=" text-white text-center p-2 z-10">
                {item.title}
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
