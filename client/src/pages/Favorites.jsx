import { Typography } from '@material-tailwind/react'
import React from 'react'
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../store/Sidebarslice'
export default function Favorites() {
  const favorites=useSelector(selectFavorites)
  return (
    <div className="flex flex-col  w-full pl-5 overflow-y-auto pb-32  h-[calc(100vh-2rem)] shadow-blue-gray-900/5 "> 
    <Typography className='text-3xl mt-2 text-gray-400 dark:text-white' >
      Favorites
    </Typography>
    <div className='md:container gap-x-5 md:justify-normal justify-center flex flex-wrap  '>
     { favorites.map((data)=>( <Card data={data}/>))
     }
    </div>
    
    </div>
  )
}
