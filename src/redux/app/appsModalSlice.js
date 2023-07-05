import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAppsModal: false,
  openMeetingPageModal: false,
  SelectedComponent: null,
  openAppsShortcut: false,
  SelectedShortcut: null,
};

export const appsModalSlice = createSlice({
  name: "appsModal",
  initialState,
  reducers: {
    handleOpenAppsModal: (state, component) => {
        state.openAppsModal = true;
        // state.SelectedComponent = component.payload;
    },
    handleCloseAppsModal: (state) => {
        state.openAppsModal = false;
        // state.SelectedComponent = null;
    },
    handleOpenMeetingPageModal: (state) => {
      state.openMeetingPageModal = true;
    },
    handleCloseMeetingPageModal: (state) => {
      state.openMeetingPageModal = false;
    },
    handleOpenShortcut: (state, component) => {
      state.openAppsShortcut = true;
      // state.SelectedShortcut = component.payload;
    },
    handleCloseShortcut: (state) => {
      state.openAppsShortcut = false;
      // state.SelectedShortcut = null;
    }
  },
});



export const { handleCloseAppsModal, handleOpenAppsModal, handleOpenMeetingPageModal, handleCloseMeetingPageModal, handleOpenShortcut, handleCloseShortcut } = appsModalSlice.actions;

export default appsModalSlice.reducer;