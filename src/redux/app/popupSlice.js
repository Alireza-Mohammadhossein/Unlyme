import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatPopupToggler: false,
    emailPopupToggler: false,
    notePopupToggler: false,
    notificationPopupToggler: false,
    settingPopupToggler: false,
    assistantPopupToggler: false,
    newAssistantPopupToggler: false,
    firstPopupTab: false,
    secondPopupTab : false,
    assistantText: '',
    assistantMessage: '',
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    toggleChatPopup: (state) => {
        if(state.chatPopupToggler === true) {
            state.firstPopupTab = false;
            state.secondPopupTab = false;
        }
        
        if(state.chatPopupToggler === false) {
            state.firstPopupTab = true;
            state.secondPopupTab = false;
        }
        state.chatPopupToggler = !state.chatPopupToggler;
        // state.firstPopupTab = !state.firstPopupTab;
        state.emailPopupToggler = false;
        state.notePopupToggler = false;
        state.notificationPopupToggler = false;
        state.settingPopupToggler = false;
        state.assistantPopupToggler = false;
        state.newAssistantPopupToggler = false;
    },

    toggleEmailpopup: (state) => {
        if(state.emailPopupToggler === true) {
            state.firstPopupTab = false;
            state.secondPopupTab = false;
        }
        
        if(state.emailPopupToggler === false) {
            state.firstPopupTab = true;
            state.secondPopupTab = false;
        }
        state.emailPopupToggler = !state.emailPopupToggler;
        // state.firstPopupTab = !state.firstPopupTab;
        state.chatPopupToggler = false;
        state.notePopupToggler = false;
        state.notificationPopupToggler = false;
        state.settingPopupToggler = false;
        state.assistantPopupToggler = false;
        state.newAssistantPopupToggler = false;
    },

    toggleNotePopup: (state) => {
        if(state.notePopupToggler === true) {
            state.firstPopupTab = false;
            state.secondPopupTab = false;
        }
        
        if(state.notePopupToggler === false) {
            state.firstPopupTab = true;
            state.secondPopupTab = false;
        }
        state.notePopupToggler = !state.notePopupToggler;
        // state.firstPopupTab = !state.firstPopupTab;
        state.chatPopupToggler = false;
        state.emailPopupToggler = false;
        state.notificationPopupToggler = false;
        state.settingPopupToggler = false;
        state.assistantPopupToggler = false;
        state.newAssistantPopupToggler = false;
    },

    toggleNotificationPopup: (state) => {
        if(state.notificationPopupToggler === true) {
            state.firstPopupTab = false;
            state.secondPopupTab = false;
        }
        
        if(state.notificationPopupToggler === false) {
            state.firstPopupTab = true;
            state.secondPopupTab = false;
        }
        state.notificationPopupToggler = !state.notificationPopupToggler;
        // state.firstPopupTab = !state.firstPopupTab;
        state.chatPopupToggler = false;
        state.emailPopupToggler = false;
        state.notePopupToggler = false;
        state.settingPopupToggler = false;
        state.assistantPopupToggler = false;
        state.newAssistantPopupToggler = false;
    },

    toggleSettingPopup: (state) => {
        if(state.settingPopupToggler === true) {
            state.firstPopupTab = false;
            state.secondPopupTab = false;
        }
        
        if(state.settingPopupToggler === false) {
            state.firstPopupTab = true;
            state.secondPopupTab = false;
        }
        state.settingPopupToggler = !state.settingPopupToggler;
        // state.firstPopupTab = !state.firstPopupTab;
        state.chatPopupToggler = false;
        state.emailPopupToggler = false;
        state.notePopupToggler = false;
        state.notificationPopupToggler = false;
        state.assistantPopupToggler = false;
        state.newAssistantPopupToggler = false;
    },

    toggleAssistantPopup: (state) => {
        if(state.assistantPopupToggler === true) {
            state.firstPopupTab = false;
            state.secondPopupTab = false;
        }
        
        if(state.assistantPopupToggler === false) {
            state.firstPopupTab = true;
            state.secondPopupTab = false;
        }
        state.assistantPopupToggler = !state.assistantPopupToggler;
        // state.firstPopupTab = !state.firstPopupTab;
        state.chatPopupToggler = false;
        state.emailPopupToggler = false;
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
            state.emailPopupToggler = false;
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
    },

    setAssistantMessage: (state, message) => {
        state.assistantMessage = message.payload;
    }


  },
});



export const {
    toggleChatPopup,
    toggleEmailpopup, 
    toggleNotePopup, 
    toggleNotificationPopup, 
    toggleSettingPopup, 
    toggleAssistantPopup, 
    toggleNewAssistantPopup,
    toggleFirstPopupTab,
    toggleSecondPopupTab,
    setAssistantText,
    setAssistantMessage
} = popupSlice.actions;

export default popupSlice.reducer;