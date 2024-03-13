import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,  Input,} from "@nextui-org/react";
import {EnvelopeIcon,  } from "@heroicons/react/24/solid";
import { LockIcon } from "./LockIcon";

import { Typography } from "@mui/material";
export default function Signup() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
 
  return (
    <>
      <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
              onClick={onOpen}
            >
              Sign up
            </Typography>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
              <ModalBody>
                <Input
               
                endContent={
                  <EnvelopeIcon className=" w-5 h-5 text-default-400 pointer-events-none flex-shrink-0" />
                }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Reapeat  your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                <Button
        size="lg"
        variant="flat"
        color="primary"
        className="flex items-center gap-3"
      >
        <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
        Continue with Google
      </Button>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
