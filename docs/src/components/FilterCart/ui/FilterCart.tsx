import React, { FC } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface FilterCartProps { 
  

  nextPage: boolean
  setNextPage: (nextPage: boolean) => void
}
export const FilterCart: FC<FilterCartProps> = ({ setNextPage, nextPage }) => {


  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h1 className="text-slate-400 font-bold text-4xl mt-4 mx-auto">Filter card</h1>
        <button onClick={() => setNextPage(!nextPage)} className="border-solid rounded-md border-2 mt-4
        bg-neutral-800 text-2xl p-2 text-gray-500 duration-300 font-bold hover:bg-neutral-900 hover:border-neutral-400 hover:p-4 ">
        { 
          nextPage ? 
          <h1 className=" text-zinc-500 ">
            All photos 
          </h1>
           : 
          <h1 className="text-gray-300">
            Your likely photos
          </h1>
           
        }
        
        </button>
      </div>
    </div>
  );
};
