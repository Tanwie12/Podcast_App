import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Input, Typography } from '@material-tailwind/react'
import { useSelector } from 'react-redux'
import { selectCategories } from '../store/Sidebarslice'

import Scard from '../components/Scard'
import { Link } from 'react-router-dom'
export default function Search() {
    const category=useSelector(selectCategories)
  return (
    <div className='flex flex-col dark:bg-dark overflow-y-auto  h-screen md:container'>
        <div className="rounded-lg w-full flex justify-center container my-5 md:p-16">
        <Input icon={<MagnifyingGlassIcon className="h-5 w-5 rounded-lg" />} label="Search" placeholder='search here' />
      </div>
      <div className="flex flex-col  w-full md:pl-5 pb-32 overflow-y-auto    shadow-blue-gray-900/5 "> 
    <Typography className='text-2xl md:text-3xl flex-1 mt-2 dark:text-white' >
      Browse All
    </Typography>

   <div className='flex md:flex-row justify-center  overflow-y-auto md:overscroll-y-none flex-wrap  md:flex-wrap gap-3 md:justify-normal p-16'>
   { category.map((data)=>( 
   <Link to={`/Showpodcast/${data.title}`}>
   <Scard data={data} className=""/>
   </Link>
   
   
   ))
     }
   </div> 
    </div>
    </div>
  )
}
