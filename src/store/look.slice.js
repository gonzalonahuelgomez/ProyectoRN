import { getLooks, insertLook } from "../db";

import Look from "../models/looks";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  looks: [],
};
console.log(initialState)

const lookSlice = createSlice({
  name: "look",
  initialState,
  reducers: {
    addLook: (state, action) => {
      const newLook = new Look(
        action.payload.id.toString(),
        action.payload.dayMoment,
        action.payload.weather,
        action.payload.type,
        action.payload.image
      );
      state.looks.push(newLook);
    },
    setLooks: (state, action) => {
      state.looks = action.payload;
    },
  },
});

export const { addLook, setLooks } = lookSlice.actions;

export const saveLook = (dayMoment, weather, type, image) => {
  return async (dispatch) => {    
    
    try {     
      const result = await insertLook(dayMoment, weather, type);
      dispatch(addLook({ id: result.insertId, dayMoment, weather, type, image }));
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
};

export const loadLooks = () => {
  return async (dispatch) => {
    try {
      const result = await getLooks();
      dispatch(setLooks(result?.rows?._array));
    } catch (error) {
      console.warn(error);
      throw error;
    }
  };
};

export default lookSlice.reducer;
