import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Tservice = {
  id: number | null;
  nameService: string;
  duration: string;
  price: string;
};

interface IServiceState {
  service: Tservice;
}

const initialState: IServiceState = {
  service: {
    id: null,
    nameService: "",
    duration: "",
    price: "",
  },
};

export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setService: (state, action: PayloadAction<Tservice>) => {
      state.service = action.payload;
    },
  },
});

export const { setService } = serviceSlice.actions;

export default serviceSlice.reducer;
