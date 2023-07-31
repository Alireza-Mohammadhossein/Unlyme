import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAppsModal: false,
  openNotesWidgetModal: false,
  openCalendarWidgetModal: false,
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
        state.openNotesWidgetModal = false;
        state.openCalendarWidgetModal = false;
        // state.SelectedComponent = null;
    },
    handleOpenNotesWidgetModal: (state, component) => {
      state.openNotesWidgetModal = true;
      // state.SelectedComponent = component.payload;
    },
    handleCloseNotesWidgetModal: (state) => {
        state.openNotesWidgetModal = false;
        // state.SelectedComponent = null;
    },

    handleOpenCalendarWidgetModal: (state, component) => {
      state.openCalendarWidgetModal = true;
      // state.SelectedComponent = component.payload;
    },
    handleCloseCalendarWidgetModal: (state) => {
        state.openCalendarWidgetModal = false;
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



export const { handleCloseAppsModal, handleOpenAppsModal, handleOpenMeetingPageModal, handleCloseMeetingPageModal, handleOpenShortcut, handleCloseShortcut, handleOpenNotesWidgetModal, handleCloseNotesWidgetModal, handleOpenCalendarWidgetModal, handleCloseCalendarWidgetModal } = appsModalSlice.actions;

export default appsModalSlice.reducer;