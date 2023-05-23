import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatPopupToggler: false,
    mailPopupToggler: false,
    notePopupToggler: false,
    notificationPopupToggler: false,
    settingPopupToggler: false,
    assistantPopupToggler: false,
    newAssistantPopupToggler: false,
    secondPopupTab : false,
    assistantText: '',
    assistantMessage: '',
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    toggleChatPopup: (state) => {
        state.chatPopupToggler = !state.chatPopupToggler;
        state.mailPopupToggler = false;
        state.notePopupToggler = false;
        state.notificationPopupToggler = false;
        state.settingPopupToggler = false;
        state.assistantPopupToggler = false;
        state.newAssistantPopupToggler = false;
    },

    toggleMailpopup: (state) => {
        state.mailPopupToggler = !state.mailPopupToggler;
        state.chatPopupToggler = false;
        state.notePopupToggler = false;
        state.notificationPopupToggler = false;
        state.settingPopupToggler = false;
        state.assistantPopupToggler = false;
        state.newAssistantPopupToggler = false;
    },

    toggleNotePopup: (state) => {
        state.notePopupToggler = !state.notePopupToggler;
        state.chatPopupToggler = false;
        state.mailPopupToggler = false;
        state.notificationPopupToggler = false;
        state.settingPopupToggler = false;
        state.assistantPopupToggler = false;
        state.newAssistantPopupToggler = false;
    },

    toggleNotificationPopup: (state) => {
        state.notificationPopupToggler = !state.notificationPopupToggler;
        state.chatPopupToggler = false;
        state.mailPopupToggler = false;
        state.notePopupToggler = false;
        state.settingPopupToggler = false;
        state.assistantPopupToggler = false;
        state.newAssistantPopupToggler = false;
    },

    toggleSettingPopup: (state) => {
        state.settingPopupToggler = !state.settingPopupToggler;
        state.chatPopupToggler = false;
        state.mailPopupToggler = false;
        state.notePopupToggler = false;
        state.notificationPopupToggler = false;
        state.assistantPopupToggler = false;
        state.newAssistantPopupToggler = false;
    },

    toggleAssistantPopup: (state) => {
        state.assistantPopupToggler = !state.assistantPopupToggler;
        state.chatPopupToggler = false;
        state.mailPopupToggler = false;
        state.notePopupToggler = false;
        state.notificationPopupToggler = false;
        state.settingPopupToggler = false;
    },

    toggleNewAssistantPopup: (state, status) => {
        if (status.payload === false) {
            state.newAssistantPopupToggler = false;
        } else {
            state.newAssistantPopupToggler = true;
            state.chatPopupToggler = false;
            state.mailPopupToggler = false;
            state.notePopupToggler = false;
            state.notificationPopupToggler = false;
            state.settingPopupToggler = false;
        }
    },

    toggleSecondPopupTab: (state, status) => {
        if (status.payload === false) {
            state.secondPopupTab = false;
        } else {
            state.secondPopupTab = true;
        }
    },

    setAssistantText: (state, text) => {
        state.assistantText = text;
        console.log('assistant text', state.assistantText);
    },

    setAssistantMessage: (state, message) => {
        state.assistantMessage = message.payload;
        console.log('assistant message', state.assistantMessage);

    }


  },
});



export const {
    toggleChatPopup,
    toggleMailpopup, 
    toggleNotePopup, 
    toggleNotificationPopup, 
    toggleSettingPopup, 
    toggleAssistantPopup, 
    toggleNewAssistantPopup,
    toggleSecondPopupTab,
    setAssistantText,
    setAssistantMessage
} = popupSlice.actions;

export default popupSlice.reducer;