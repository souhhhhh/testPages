import React, { useState } from "react";
import { photosTypes } from "../photosType";
import { CartItem } from "../../CartItem/ui/CartItem";

import { usePhotos } from "../../../hooks/usePhotos";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Navigate, useNavigate } from "react-router-dom";
import { ErrorPage } from "../../ErrorPage";
export const Cart = () => {
  const { photos, isLoading, isError  } = usePhotos();

  const likePhotos = useTypedSelector(state => state.like.likePhotos)
  const likePhotosId = likePhotos.map((item: photosTypes) => item.id)

  const navigate = useNavigate()



  if (isLoading)
    return (
      <h1 className="text-4xl text-gray-700 mt-10 flex justify-center">
        Loading...
      </h1>
    );
  
  if(isError) { 
      alert('Карточки не найдены')
      location.reload()
  }

    
  return (
    <div className="grid grid-cols-3 gap-16 justify-items-center mt-10 ">
      {photos.map((item: photosTypes) => (
        <CartItem
          item={item}
          key={item.id}
          likePhotosId={likePhotosId}
          deleteButton
        />
      ))}
    </div>
  );
};
