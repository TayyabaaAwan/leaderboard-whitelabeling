import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ApisState } from "./apisInterface";

const initialState: ApisState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
   message: "",
  check:"",
  checkChainId:0,
  address:"",
  gasfee:"",
  dynamicLeaderboardData: "",
};

export const authSlice = createSlice({
  name: "auth",
   initialState,
  reducers: {
    initiateRequest: (state:any) => {
      state.isLoading = true;
     },
     checkRedux: (state, action) => {
        state.check = action.payload
    },
    setChainId: (state, action) => {
      state.checkChainId = action.payload
  },
  setAddress: (state, action) => {
    state.address = action.payload
},
setGasFee: (state, action) => {
  state.gasfee = action.payload
},
setLeaderBoardData: (state, action) => {
  state.dynamicLeaderboardData = action.payload.dynamicLeaderboardData
},

    catchError: (state:any, action: PayloadAction<any>) => {
      state.isError = true;
      state.isLoading = false;
      state.message = action.payload.message;
    },
  },
});

export const { catchError, initiateRequest,checkRedux,setChainId,setAddress,setGasFee, setLeaderBoardData } = authSlice.actions;

export default authSlice.reducer;