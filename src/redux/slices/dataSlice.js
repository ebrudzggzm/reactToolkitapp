import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  keyword:[],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
   
    createData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    sortingData: (state, action) => {
      state.data = [...state.data.sort((a,b)=>action.payload === 'asc' ? a.price -b.price :action.payload === 'desc' ? b.price-a.price : null)];
    },
    deleteData:(state,action)=>{
    const index = state.data.findIndex((i)=>i.id===action.payload);
    state.data.splice(index,1)
    },
    updateData:(state,action)=>{
      const index = state.data.findIndex((i)=>i.id===action.payload.id);
      state.data.splice(index,1,action.payload)
    },
    searchData:(state,action)=>{
      state.keyword = action.payload;
    }
  },
});

export default dataSlice.reducer;

export const { createData,deleteData,updateData,sortingData,searchData} = dataSlice.actions;

console.log(dataSlice,'dataSlice')
