import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAppsModal: false,
  SelectedComponent: null,
};

export const appsModalSlice = createSlice({
  name: "appsModal",
  initialState,
  reducers: {
    handleOpenAppsModal: (state, component) => {
        state.openAppsModal = true;
        state.SelectedComponent = component.payload;
    },
    handleCloseAppsModal: (state) => {
        state.openAppsModal = false;
        state.SelectedComponent = null;
    },
  },
});



export const { handleCloseAppsModal, handleOpenAppsModal } = appsModalSlice.actions;

export default appsModalSlice.reducer;