// https://jsonplaceholder.typicode.com/photos
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://dattebayo-api.onrender.com/'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),

    endpoints: (builder) => ({ 
        getPhotos: builder.query({ 
            query: () => 'characters'
        }),
        getPhotoId: builder.query({ 
            query: (id) => `characters/${id}`
        }),
        
    })
    

})


export  const { useGetPhotosQuery, useGetPhotoIdQuery } = api

 api