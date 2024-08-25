import React, { useState } from 'react'


import { FilterCart } from './components/FilterCart/index'
import { Cart } from './components/Cart/index'
import { FilterCartItems } from './components/FilterCartItems'

const Page = () => {
  const [nextPage, setNextPage] = useState(false)
  return (
    <>
      <div>
        <FilterCart nextPage={nextPage} setNextPage={setNextPage} />
      {  
        nextPage ? <FilterCartItems /> : <Cart />  
      }
      </div>
    </>
  )
}

export default Page