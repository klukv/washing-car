import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Tservice = {
  id: number | null;
  nameService: string;
  duration: string;
  price: string;
};

export type Trecords = {
  id: number,
  userDto: {
    username: string,
    numberMobile: string
  },
  service: string,
  date: string,
  startTime: string,
  endTime: string
}

interface IServiceState {
  service: Tservice;
  allServices: Trecords[];
}

const initialState: IServiceState = {
  service: {
    id: null,
    nameService: "",
    duration: "",
    price: "",
  },
  allServices: [],
};

export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setService: (state, action: PayloadAction<Tservice>) => {
      state.service = action.payload;
    },
    setAllServices: (state, action: PayloadAction<Trecords[]>) => {
      state.allServices = action.payload;
    },
  },
});

export const { setService, setAllServices } = serviceSlice.actions;

export default serviceSlice.reducer;
