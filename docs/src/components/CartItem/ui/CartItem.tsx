import React, { FC, memo, useState } from 'react'
import { CartActions } from '../../CartActions/ui/CartActions'
import { photosTypes } from '../../Cart/photosType'
import cn from 'clsx'
import { Link } from 'react-router-dom'



interface CartItemProps { 
  item: photosTypes
  likePhotosId?: number[]
  deleteButton: boolean
}

export const CartItem: FC<CartItemProps> = memo(({ item, likePhotosId, deleteButton }) => {
  const isActive = likePhotosId?.includes(item.id)
  return (
    <div className='flex justify-center text-center flex-col'>

      <Link to={`/characters/${item.id}`} className={cn('border border-gray-500 rounded-md h-[400px] w-[400px] scale-100 bg-gray-700 duration-500 hover:bg-gray-800 hover:scale-105', { 
        'bg-gray-900 ': isActive
      })}>
    
        <img src={item.images[0]} alt="" className='mx-auto rounded-md mt-4 w-[200px] h-[140px]' />
        <h1 className={cn('mt-7 font-semibold text-slate-400 text-xl', { 
          'text-neutral-500 duration-500': isActive
        })}>{item.name}</h1>
        <Link to="#">
          <CartActions item={item} deleteButton={deleteButton} />
        </Link>
      </Link>

    </div>
  )
})

