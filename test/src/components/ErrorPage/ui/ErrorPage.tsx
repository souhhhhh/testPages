import React from 'react'
import { useNavigate } from 'react-router-dom'


export const ErrorPage = () => {
  

  const navigate = useNavigate()
  const backToHomePage = () => { 
    navigate('/')
  }
  return (
    <div className='flex justify-center '>
      <div className=' text-white text-2xl flex flex-col'>
        Такой страницы нет😶
      <button className='p-2 border rounded-md bg-slate-700' onClick={() => backToHomePage()}>Вернуться на <br/> главную страницу?</button>
      </div>
    </div>
  )
}

