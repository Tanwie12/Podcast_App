import React from 'react'
import { HorizontalCard } from '../components/CardH'
import { Typography } from '@material-tailwind/react'
import Play from '../components/Episodes'
import { useParams } from 'react-router-dom'

export default function Podcast() {
  const params=useParams()
  console.log(params)
  return (
    <div className='md:p-[2rem] overflow-y-auto h-[calc(100vh-2rem)] pb-32 '>

        <HorizontalCard params={params} />
        <div className='flex flex-col mt-5 md:container rounded-3xl'>
        <Typography color="white" size="5xl" className="">
         All Episodes
          </Typography>
          <div className='my-5'>
<Play/>
<Play/>

          </div>
        </div>
    </div>
  )
}
