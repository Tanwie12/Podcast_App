
import React from 'react'
import { useFormik } from  'formik';
import {Autocomplete, AutocompleteItem} from '@nextui-org/react';
import {Typography,Input,Textarea, Button,} from '@material-tailwind/react'
import { courseSchema } from './CoursesSchema'




export default function Courses() {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  // formik
  const {
    values,
    errors,
    touched,
    
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: '',
      tutor: '',  
      date: '',
      password:'',
      textarea: '',
    },
    validationSchema: courseSchema,
    onSubmit,
  });

  // form component

  return (
    <div className="flex flex-col justify-center items-center px-8 py-9 text-2xl  text-red-600 bg-white rounded-md shadow-sm max-w-[833px] max-md:px-5">
      {/* form component */}
      <div className='container flex flex-col items-center justify-center'>
     
     <Typography variant='h5' placeholder="hihi">please fill in the spaces</Typography>
   <form onSubmit={handleSubmit}>
     <div className='flex flex-col gap-4'>
   <Typography variant="h6" color="blue-gray" className="" placeholder="Enter the course title">
          Course Title
         </Typography>
         <Input
                           label="Password"
                           size="lg"
                           type="password"
                           placeholder='password'
                           name='password'
                           value={values.password}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           crossOrigin=""
                           className={errors.password && touched.password ? 'border-red-500' : ''}
                       />
         <input
                 
                
                 placeholder="Enter your name"
                 
                 type="text"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.name}
                 name="name"
                 className={errors.name && touched.name ? 'border-red-500' : ''}
               />
               {errors.name && touched.name && <p className='text-red-500'>{errors.name}</p>}
               
     <Typography variant="h6" color="blue-gray" className="" placeholder="Enter the subtitle">
          Tutor<span className=' ml-1 text-red-500'>*</span>
         </Typography>
     <Input
     label='tutor'
         placeholder='Enter the tutor name'
         type="text"
         name="tutor"
         value={values.tutor}
         onChange={handleChange}
         onBlur={handleBlur} crossOrigin={undefined}      />
     {errors.tutor && touched.tutor && <div>{errors.tutor}</div>}
     <Typography variant="h6" color="blue-gray" className="" placeholder="select the date">
         Date
         </Typography>
         <Input
         type="date"
         name="date"
         placeholder='Enter the date'
         value={values.date}
         onChange={handleChange}
         onBlur={handleBlur} crossOrigin={undefined} />
     {errors.date && touched.date && <div>{errors.date}</div>}
    
     <Typography variant="h6" color="blue-gray" className="" placeholder="Enter the course title">
          Class
         </Typography>
        
        
<Typography variant="h6" color="blue-gray" className="" placeholder="Enter the course title">
          Description
         </Typography>

      <div className="w-96">
      
     <Textarea label="Message" name='textarea' value={values.textarea} onChange={handleChange}/>
   </div>
   
     <Button type="submit" className='justify-center bg-[#0A4378] items-center rounded-md max-w-[772px] max-md:px-5    font-bold text-center text-white' placeholder='hihi'>
       Create course
     </Button>
      
     </div>
   </form>
  
   </div>
    
    </div>
  );
}


