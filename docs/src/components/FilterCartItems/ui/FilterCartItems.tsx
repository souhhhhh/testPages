import React from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { CartItem } from '../../CartItem'
import { photosTypes } from '../../Cart/photosType'


export const FilterCartItems = () => {


  const likePhotos = useTypedSelector(state => state.like.likePhotos)
  const likePhotosId = likePhotos.map((item: photosTypes) => item.id)
  
  return (
    <div>
        <div className='flex justify-center gap-10 mt-10 flex-wrap'>
          { 
            likePhotos.map((likePhotos) => ( 
              <CartItem item={likePhotos} key={likePhotos.id} deleteButton={false} likePhotosId={likePhotosId} />
            ))
          }
        </div>
    </div>
  )
}

