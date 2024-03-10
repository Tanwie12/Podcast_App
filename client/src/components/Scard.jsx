import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { Typography } from "@material-tailwind/react";

export default function Scard({ data }) {
  const item = data;

  return (
    <div className="transform transition duration-300 hover:shadow-xl hover:scale-105">
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="relative overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={item.title}
            className="w-full h-[140px]"
            src={item.img}
          />
          <div className="absolute top-2 left-0 right-8 flex justify-center items-center">
            <Typography className="text-white text-center p-2 z-10">
              {item.title}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
