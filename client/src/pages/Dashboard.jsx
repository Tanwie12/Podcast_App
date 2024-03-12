import { Typography } from '@material-tailwind/react';
import React from 'react';
import CardComponent from '../components/Card';
import { useSelector } from 'react-redux';
import { selectComedy, selectCard, selectCrime, selectHorror, selectNews, selectSport } from '../store/Sidebarslice';


export default function Dashboard() {
  const cardData = useSelector(selectCard);
  const crimeData = useSelector(selectCrime);
  const newsData = useSelector(selectNews);
  const sportData = useSelector(selectSport);
  const horrorData = useSelector(selectHorror);
  const comedyData = useSelector(selectComedy);

  const Section = [
    {
      title: "Most Popular",
      data: cardData
    },
    {
      title: "Crime",
      data: crimeData
    },
    {
      title: "News",
      data: newsData
    },
    {
      title: "Sport",
      data: sportData
    },
    {
      title: "Horror",
      data: horrorData
    },
    {
      title: "Comedy",
      data: comedyData
    }
  ];

  return (
    <div className="flex flex-wrap md:container overflow-y-auto md:pb-32  h-[calc(100vh-2rem)] bg-gray-800">

{
  Section.map(section => (
    <div name="main div " className='dark:bg-dark w-full mt-5 shadow-lg bg-white rounded-lg'>
     
      <div name="div for the text" className="flex md:container  w-full flex-row mt-3  justify-around md:justify-between">
        <Typography color="" size="18xl" className="text-center text-3xl dark:text-white  items-center">
          {section.title}
          </Typography>
          <Typography color="pink" size="5xl" className="text-center ">
          Show All
          </Typography>

      </div>
      <div name="div for the cards" className="flex flex-wrap md:container w-full pt-4 mb-10 md:space-x-5 md:justify-normal justify-center">
        {
          section.data.map(data => (  
           <CardComponent data={data}/>
          ))
        }
      </div>
      
      </div>
  ))


}

      

    </div>
  
  );
}
