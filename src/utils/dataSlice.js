import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "Jobs",
  initialState: {
    allData: null,
    filteredData: null,
  },
  reducers: {
    addAllData: (state, action) => {
      state.allData = action.payload;
    },
    filterData: (state, action) => {
      const filterValue = action.payload;
      state.filteredData = state?.allData?.jdList?.filter((dataItem) => {
        return dataItem?.jobRole === filterValue[0];
      });
    },
  },
});

export const { addAllData, filterData } = dataSlice.actions;
export default dataSlice.reducer;
