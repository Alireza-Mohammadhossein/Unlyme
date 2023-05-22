import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatPopupToggler: false,
    mailPopupToggler: false,
    notePopupToggler: false,
    notificationPopupToggler: false,
    settingPopupToggler: false,
    assistantPopupToggler: false,
    newAssistantToggler: false,
    assistantText: '',
    assistantMessage: '',
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    toggleChatPopup: (state) => {
        state.chatPopupToggler = !state.chatPopupToggler;
    },
    toggleMailpopup: (state) => {
        state.mailPopupToggler = !state.mailPopupToggler;
    },
    toggleNotePopup: (state) => {
        state.notePopupToggler = !state.notePopupToggler;
    },
    toggleNotificationPopup: (state) => {
        state.notificationPopupToggler = !state.notificationPopupToggler;
    },
    toggleSettingPopup: (state) => {
        state.settingPopupToggler = !state.settingPopupToggler;
    },
    toggleAssistantPopup: (state) => {
        state.assistantPopupToggler = !state.assistantPopupToggler;
    },
    toggleNewAssistantPopup: (state) => {
        state.newAssistantToggler = !state.newAssistantToggler;
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
    setAssistantText,
    setAssistantMessage
} = popupSlice.actions;

export default popupSlice.reducer;