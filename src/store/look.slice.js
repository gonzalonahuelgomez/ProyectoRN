import { getLooks, insertLook } from "../db";

import Look from "../models/looks";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  looks: [],
};

const lookSlice = createSlice({
  name: "look",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newLook = new Look(
        action.payload.id.toString(),
        action.payload.dayornight,
        action.payload.weather,
        action.payload.type
      );
      state.looks.push(newLook);
    },
    setLooks: (state, action) => {
      state.looks = action.payload;
    },
  },
});

export const { addLook, setLooks } = lookSlice.actions;

export const saveLook = (dayornight, weather, type) => {
  return async (dispatch) => {
    
    
    try {
     
      const result = await insertLook(dayornight, weather, type);
      dispatch(addLook({ id: result.insertId, dayornight, weather, type }));
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
