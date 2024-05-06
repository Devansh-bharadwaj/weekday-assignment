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
      const filtered = state.allData?.jdList?.filter((dataItem) => {
        return dataItem?.jobRole === filterValue[0];
      });
      state.filteredData = [...filtered]; // Update filteredData state
    },
    searchFilter: (state, action) => {
      const searchText = action.payload.toLowerCase();
      const filtered = state.allData?.jdList?.filter((dataItem) => {
        if (searchText !== "") {
          return dataItem?.companyName?.toLowerCase().includes(searchText);
        } else {
          return dataItem;
        }
      });
      state.filteredData = filtered;
    },
  },
});

export const { addAllData, filterData, searchFilter } = dataSlice.actions;
export default dataSlice.reducer;
