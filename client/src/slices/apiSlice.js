import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// const localUrl="http://127.0.0.1:5000/"
const cyclic="https://impossible-waders-calf.cyclic.app/"
// const onrender='https://podcast-app-uxb4.onrender.com'
const baseQuery = fetchBaseQuery({
    baseUrl: cyclic,
    credentials: 'include', // Include cookies with the request
  });

export const apiSlice=createApi({
    baseQuery,
    tagTypes:['User'],
    endpoints:(builder)=>({})
})
