import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { photosTypes } from '../../components/Cart/photosType'
import { likePhotosState } from '../types/storeType'




const initialState: likePhotosState = {
  likePhotos: [],
}

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    addToLikePhotos: (state, action: PayloadAction<photosTypes>) => { 
     const isExistLikePhoto  = state.likePhotos.some(item => item.id == action.payload.id)
     
     if(isExistLikePhoto) { 
      state.likePhotos = state.likePhotos.filter((likePhoto) => likePhoto.id !== action.payload.id)
    }



    else { 
      state.likePhotos.push({...action.payload})
    }

    },
  },
})
