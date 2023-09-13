import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAppsModal: false,
  openNotesWidgetModal: false,
  openCalendarWidgetModal: false,
  openWorkDriveWidgetModal: false,
  openTasksWidgetModal: false,
  openEmailsWidgetModal: false,
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
        state.openWorkDriveWidgetModal = false;
        state.openTasksWidgetModal = false;
        state.openEmailsWidgetModal = false;
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

    handleOpenWorkDriveWidgetModal: (state, component) => {
      state.openWorkDriveWidgetModal = true;
      // state.SelectedComponent = component.payload;
    },
    handleCloseWorkDriveWidgetModal: (state) => {
        state.openWorkDriveWidgetModal = false;
        // state.SelectedComponent = null;
    },

    handleOpenTasksWidgetModal: (state, component) => {
      state.openTasksWidgetModal = true;
      // state.SelectedComponent = component.payload;
    },
    handleCloseTasksWidgetModal: (state) => {
        state.openTasksWidgetModal = false;
        // state.SelectedComponent = null;
    },

    handleOpenEmailsWidgetModal: (state, component) => {
      state.openEmailsWidgetModal = true;
      // state.SelectedComponent = component.payload;
    },
    handleCloseEmailsWidgetModal: (state) => {
        state.openEmailsWidgetModal = false;
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



export const { handleCloseAppsModal, handleOpenAppsModal, handleOpenMeetingPageModal, handleCloseMeetingPageModal, handleOpenShortcut, handleCloseShortcut, handleOpenNotesWidgetModal, handleCloseNotesWidgetModal, handleOpenCalendarWidgetModal, handleCloseCalendarWidgetModal, handleOpenWorkDriveWidgetModal, handleCloseWorkDriveWidgetModal, handleOpenTasksWidgetModal, handleCloseTasksWidgetModal, handleOpenEmailsWidgetModal, handleCloseEmailsWidgetModal } = appsModalSlice.actions;

export default appsModalSlice.reducer;