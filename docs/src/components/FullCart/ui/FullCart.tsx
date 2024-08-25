import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetPhotoIdQuery } from '../../../store/api/getPhotos'



export const FullCart = () => {
    const { id } = useParams() 
    const { data, isLoading, isError } = useGetPhotoIdQuery(id) 
    const navigate = useNavigate()

    if(isLoading) return <h1>Loading...</h1>

    if(isError) { 
        alert('Ошибка при получении картинки :(')
        navigate('/')
    }
    return (
        <div className='flex justify-center mt-10 items-center flex-col'>
            <div className='border rounded-md p-5 h-[450px] w-96 flex flex-col mx-auto items-center 
            bg-zinc-800 hover:scale-105 hover:bg-zinc-700 duration-300 cursor-pointer
            text-zinc-500
            hover:text-zinc-900
            '>
                <img src={data?.images[0]} alt="" width={250} height={250} />
                <h1 className='text-2xl  mt-5'>Name: {data?.name}</h1>
                <div className='flex justify-center flex-col mt-1'>
                    <h1 className='text-xl '>Options:</h1>
                    <h1 className='text-gray-400 mt-1'>Family: {Object.values(data?.family)}</h1>
                    <h1 className='text-gray-400 mt-1'>Sex: {Object.values(data?.personal.sex)}</h1>
                    <h1 className='text-gray-400 mt-1'>Clan: {Object.values(data?.personal.clan)}</h1>
                    <h1 className='text-gray-400 mt-1'>KekkeiGenkai: {Object.values(data?.personal.kekkeiGenkai[0])}</h1>
                </div>
            </div>
                <Link to={'/'} className='mt-5 border rounded-md p-2 text-zinc-400 bg-zinc-800 duration-500 hover:bg-zinc-950'>Вернуться на главную</Link>
        </div>
    )
}


// https://dattebayo-api.onrender.com/characters/${id}

// useEffect(() => { 
//     async function getPhoto() {
//         try { 
//             const photoData = await data
//             console.log(photoData)
//             setPhoto(photoData) 
//         } catch (error) { 
//             alert('Ошибка при получении картинки')
//             navigate('/')
//         }
//     }
//     getPhoto()
// }, [])