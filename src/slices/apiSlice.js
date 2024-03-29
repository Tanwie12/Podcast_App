import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cyclic="https://impossible-waders-calf.cyclic.app/"
// const onrender='https://podcast-app-uxb4.onrender.com'
const baseQuery=fetchBaseQuery({baseUrl:cyclic});

export const apiSlice=createApi({
    baseQuery,
    tagTypes:['User'],
    endpoints:(builder)=>({})
})
