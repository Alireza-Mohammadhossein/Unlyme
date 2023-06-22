import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAppsModal: false,
  openMeetingPageModal: false,
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
    handleOpenMeetingPageModal: (state) => {
      state.openMeetingPageModal = true;
    },
    handleCloseMeetingPageModal: (state) => {
      state.openMeetingPageModal = false;
    },
  },
});



export const { handleCloseAppsModal, handleOpenAppsModal, handleOpenMeetingPageModal, handleCloseMeetingPageModal } = appsModalSlice.actions;

export default appsModalSlice.reducer;