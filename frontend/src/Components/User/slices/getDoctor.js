import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

 const initialState={
    doctor:[],
    isLoading:false,
    error:''
}

 export const getdoctor=createAsyncThunk("getdoctor", async()=>{
    const res=await fetch("https://hospital-management-system-1-lrix.onrender.com/public/doctor")
    const data=res.json()
    return data

})
export const getDoctor=createSlice({
    name:'getDoctor',
    initialState,
    extraReducers:{
        [getdoctor.pending]:(state)=>{
            state.isLoading=true
        },
        [getdoctor.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.doctor=action.payload
        },
        [getdoctor.rejected]:(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        }

    }

})


export default getDoctor.reducer