import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../../api/requests";

const initialState = {
  data: {},
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      if(action.payload) {
        state.data = action.payload;
      }
    },
    obtainData: (state, action) => {
      return state.data;
    }
  },
});

export const fetchData = () => async (dispatch) => {
  const incomingData = await getData();
  dispatch(setData(incomingData));
}

export const { obtainData, setData } = dataSlice.actions;

export const dataReducer = dataSlice.reducer;