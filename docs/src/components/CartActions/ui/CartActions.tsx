import React, { FC } from 'react'
import like from '../../../assets/icons/like.svg'
import basket from '../../../assets/icons/basket.png'
import { photosTypes } from '../../Cart/photosType'
import { useActions } from '../../../hooks/useActions'

interface CartActions { 
  item: photosTypes
  deleteButton: boolean
}

export const CartActions: FC<CartActions> = ({ item, deleteButton }) => {
  const { removePhotos,addToLikePhotos } = useActions()
  return (
    <div className='mt-16'>
      <div className='flex justify-around'>
        <button onClick={() => (addToLikePhotos(item))}>
          <img src={like} alt="like" width={50} height={50}/>
        </button>

        {deleteButton && <button onClick={() => removePhotos({id: item.id})}>
          <img src={basket} alt="basket" width={50} height={50} />
        </button>}
      </div>
    </div>
  )
}

