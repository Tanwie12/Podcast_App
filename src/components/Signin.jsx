import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Card, Input, CardBody, CardHeader, Checkbox, CardFooter, Button,Typography } from '@material-tailwind/react';

import { useNavigate,} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Signup from "./Signup";
import {Input as InputA} from 'antd'


export function LoginCard() {
  
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [login,]=useLoginMutation();
const {userInfo}=useSelector((state)=>state.auth)
 



useEffect(()=>{
  if(userInfo){
      navigate('/dashboard')
  }
},[navigate,userInfo])


const onSubmit = async (values, actions) => {
  try {
      const res = await login(values).unwrap();
      dispatch(setCredentials(res));
      console.log(res)
      navigate('/dashboard');
  } catch (error) {
      console.error(error); // Log the error to the console
     toast.error(error.data.message);
  } finally {
      console.log(document.cookie())
      actions.resetForm(); // Reset the form regardless of success or failure
  }
};

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
      initialValues: {
          email: '',
          password: '',
          rememberMe: false,
      },
   
      onSubmit,
  });

 

  const handleCheckboxChange = (e) => {
      handleChange(e); // Pass the event object to handleChange
      // Formik will automatically update the value of `rememberMe` field based on the checked state of the checkbox
  };
  
  return (
    <form autoComplete='off' autoFocus='off' onSubmit={handleSubmit}>
    <Card className="w-full md:w-96 mt-2">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Button
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3"
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />
          Continue with Google
        </Button>
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
                        <Input
                            label="Email"
                            size="lg"
                            type='email'
                            name='email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            className={errors.email && touched.email ? 'border-red-500' : ''}
                        />
                        {errors.email && touched.email && <p className='text-red-500'>{errors.email}</p>}
                        <InputA.Password
                        label="Password"
                        size="large"
                        type="password"
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password ? 'border-red-500' : ''}
                        
                        
                        placeholder="input password" />
                        {/* <Input
                            label="Password"
                            size="lg"
                            type="password"
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password ? 'border-red-500' : ''}
                        /> */}
                        {errors.password && touched.password && <p className='text-red-500'>{errors.password}</p>}
                        
                        <div className="-ml-2.5">
                            <Checkbox
                                label="Remember Me"
                                name='rememberMe'
                                checked={values.rememberMe}
                                onChange={handleCheckboxChange}
                            />
                        </div>
                    </CardBody>
      <CardFooter className="pt-0">
      <Button loading={isSubmitting} variant="gradient" fullWidth type='submit'>
          Sign In
      </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Signup />
        </Typography>
      </CardFooter>
    </Card>
    </form>
  );
}
