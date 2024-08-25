import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { photosTypes } from '../../components/Cart/photosType'
import { photosState } from '../types/storeType'




const initialState: photosState = {
  photos: [],
}

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addToPhotos: (state, action: PayloadAction<photosTypes[]>) => { 
      state.photos = action.payload
    },
    removePhotos: (state, action: PayloadAction<{id: number}>) => { 
      state.photos = state.photos.filter(photos => photos.id !== action.payload.id)
    }
  },
})
