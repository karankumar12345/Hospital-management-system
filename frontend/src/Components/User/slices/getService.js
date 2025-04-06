import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

 const initialState={
    service:[],
    isLoading:false,
    error:''
}

 export const getservice=createAsyncThunk("getService", async()=>{
    const res=await fetch("https://hospital-management-system-1-lrix.onrender.com/public/service")
    const data=res.json()
    return data

})
export const getService=createSlice({
    name:'getDoctor',
    initialState,
    extraReducers:{
        [getservice.pending]:(state)=>{
            state.isLoading=true
        },
        [getservice.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.service=action.payload
        },
        [getservice.rejected]:(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        }

    }

})


export default getService.reducer