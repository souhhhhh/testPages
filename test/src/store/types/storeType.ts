import { PayloadAction, Reducer } from "@reduxjs/toolkit";
import { api } from "../api/getPhotos";
import { photosTypes } from "../../components/Cart/photosType";


export interface StoreSchema { 
    photos: Reducer<photosState>
    like: Reducer<likePhotosState>
    [api.reducerPath]: any
}



export interface photosState {
    photos: photosTypes[]
}

export interface likePhotosState {
    likePhotos: photosTypes[]
}