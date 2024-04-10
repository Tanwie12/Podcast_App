import React from "react";
import{Button as MButton} from "@material-tailwind/react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,  Input,} from "@nextui-org/react";
import {EnvelopeIcon,  } from "@heroicons/react/24/solid";
import { LockIcon } from "../components/LockIcon";


import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";

import { Typography } from "@mui/material";
import { useUpdateProfileMutation } from "../slices/userApiSlice";

export default function Signup() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();


  const [Update]=useUpdateProfileMutation();

 

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
 

  const onSubmit=async(values,actions)=>{
    console.log(values)
    try {
        const res=await Update({
            name:values.name,
            email:values.email,
            password:values.password

        }).unwrap();
        dispatch(setCredentials({...res}))
        toast.success('profile updated')
        
    } catch (error) {
        toast.error(error?.data?.message||error.error)
        
    }
   
  }


// formik 


const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
  initialValues: {
    name:'',
      email: '',
      password: '',
      confirmPassword: '',
     
  },
  validationSchema: signupSchema,
  onSubmit,
});

useEffect(() => {
    values.name=userInfo.name
    values.email=userInfo.email

    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userInfo.name,userInfo.email]);


  return (
    <>
      <Typography
              as="a"
              href="#signup"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold dark:text-primary"
              onClick={onOpen}
            >
              Upadate Profile
            </Typography>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
             <form autoComplete="off" onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">Update profile</ModalHeader>
              <ModalBody>
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  className={errors.name && touched.name ? 'border-red-500' : ''}
                />
                {errors.name && touched.name && <p className='text-red-500'>{errors.name}</p>}
                

               
                <Input
               
                endContent={
                  <EnvelopeIcon className=" w-5 h-5 text-default-400 pointer-events-none flex-shrink-0" />
                }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                />
                 {errors.email && touched.email && <p className='text-red-500'>{errors.email}</p>}
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  variant="bordered"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  className={errors.password && touched.password ? 'border-red-500' : ''}
                />
                {errors.password && touched.password && <p className='text-red-500'>{errors.password}</p>}
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="confirmPassword"
                  placeholder="Reapeat  your password"
                  type="password"
                  variant="bordered"
                  name='confirmPassword'
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.confirmPassword && touched.confirmPassword ? 'border-red-500' : ''}
                  
                />
                {errors.confirmPassword && touched.confirmPassword && <p className='text-red-500'>{errors.confirmPassword}</p>}
                
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <MButton loading={isSubmitting}  color="primary" type='submit'>                      
                Update 
                </MButton>
              </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
