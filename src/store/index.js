import { configureStore, createSlice } from '@reduxjs/toolkit';

const path = createSlice({
  name: 'path',
  initialState: {
    arriveStation: {
      line: null,
      name: null,
    },
    departureStation: {
      line: null,
      name: null,
    },
  },
  reducers: {
    setDepartureLine(state, action) {
      state.departureStation.line = action.payload;
    },
    setDepartureStation(state, action) {
      state.departureStation.name = action.payload;
    },
    setArriveLine(state, action) {
      state.arriveStation.line = action.payload;
    },
    setArriveStation(state, action) {
      state.arriveStation.name = action.payload;
    },
    initStationState(state) {
      state.arriveStation = { line: null, name: null };
      state.departureStation = { line: null, name: null };
    },
    initDeparturestate(state) {
      state.departureStation = { line: null, name: null };
    },
    initArriveState(state) {
      state.arriveStation = { line: null, name: null };
    },
  },
});

export const {
  setDepartureLine,
  setDepartureStation,
  setArriveLine,
  setArriveStation,
  initDeparturestate,
  initArriveState,
  initStationState,
} = path.actions;

export default configureStore({
  reducer: {
    path: path.reducer,
  },
});
