import HeaderAssistantPopup from './header-assistantpopup/HeaderAssistantPopup';
import HeaderChatPopup from './header-chatpopup/HeaderChatPopup';
import HeaderEmailPopup from './header-emailpopup/HeaderEmailPopup';
import HeaderNotePopup from './header-notepopup/HeaderNotePopup';
import HeaderNotificationPopup from './header-notificationpopup/HeaderNotificationPopup';
import HeaderSettingPopup from './header-settingpopup/HeaderSettingPopup';
import { useSelector, useDispatch } from "react-redux";



const HeaderPopups = () => {
    const dispatch = useDispatch();


    const chatPopup = useSelector((state) => state.popup.chatPopupToggler);
    const emailPopup = useSelector((state) => state.popup.emailPopupToggler);
    const notePopup = useSelector((state) => state.popup.notePopupToggler);
    const notificationPopup = useSelector((state) => state.popup.notificationPopupToggler);
    const settingPopup = useSelector((state) => state.popup.settingPopupToggler);
    const assistantPopup = useSelector((state) => state.popup.assistantPopupToggler);



  return (
    <>
      {chatPopup ? (
        <div className="header__popup-area">
          <HeaderChatPopup />
        </div>
        ) : (
        ""
      )}

      {notePopup ? (
        <div className="header__popup-area">
          <HeaderNotePopup />
        </div>
      ) : (
        ""
      )}

      {emailPopup ? (
        <div className="header__popup-area">
          <HeaderEmailPopup />
        </div>
      ) : (
        ""
      )}
      
      {notificationPopup ? (
        <div className="header__popup-area">
          <HeaderNotificationPopup />
        </div>
      ) : (
        ""
      )}

      {assistantPopup ? (
        <div className="header__popup-area">
          <HeaderAssistantPopup />
        </div>
      ) : (
        ""
      )}

      {settingPopup ? (
        <div className="header__popup-area">
          <HeaderSettingPopup />
        </div>
      ) : (
        ""
      )}

    </>
  );
};

export default HeaderPopups;
