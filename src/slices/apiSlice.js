import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// const localUrl="http://127.0.0.1:5000/"
// const cyclic="https://impossible-waders-calf.cyclic.app/"
// const onrender='https://podcast-app-uxb4.onrender.com'
const URL=process.env.REACT_APP_NODE_ENV === "development"?process.env.REACT_APP_lOCAL_URL:process.env.REACT_APP_CYCLIC_URL;
console.log('URL',process.env.REACT_APP_lOCAL_URL,process.env.REACT_APP_CYCLIC_URL,URL)
const baseQuery = fetchBaseQuery({
    baseUrl: URL,
    credentials: 'include', // Include cookies with the request
  });
  console.log(process.env);

export const apiSlice=createApi({
    baseQuery,
    tagTypes:['User'],
    endpoints:(builder)=>({})
})
