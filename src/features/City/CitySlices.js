import { createSlice} from '@reduxjs/toolkit';
//import { fetchCount } from './counterAPI';

const initialState = {
  city_0: {
      name: "Napoli",
      data: {}
  },
  city_1: {
      name: "Cebollati",
      data: {}
  },
  city_2: {
      name: "Yuma",
      data: {}
  },
  mainCity: {
  },
  mainCityDetails:{
  }
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
      setMainCity: (state, action) => {
          state.mainCity = action.payload
      },
      setCityData: (state, action) => {
          state["city_"+action.payload.position].data = action.payload.data;
          if (action.payload.name){
            state["city_"+action.payload.position].name = action.payload.name;
          }
      },
      setMainCityDetails:(state, action) =>{
          state.mainCityDetails = action.payload
      },
      remove: (state, position) => {
          state[position] = null;
      }
  }
});

export const {
  setMainCity,
  setCityData,
  setMainCityDetails,
  remove
} = citySlice.actions;

export const selectCity = (state) => state.store;

export default citySlice.reducer;