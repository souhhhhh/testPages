import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { photosSlice } from "../store/slice/photosSlice";
import { likeSlice } from "../store/slice/likeSlice";
const rootAction = { 
    ...photosSlice.actions,
    ...likeSlice.actions
}
//Хук чтобы доставать actions
export const useActions = () => { 
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}