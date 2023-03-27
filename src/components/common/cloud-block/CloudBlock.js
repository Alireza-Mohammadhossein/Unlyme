import React from "react";
// import "./cloud-block.scss";

// const ASSETS_URL = window.assets_url;

const CloudBlock = ({ 
  title,
  iconContainerColor,
  iconName,
  iconAction,
  content,
  mdiIcon,
  mdiIconColor,
  infoContent,
  rightButtonAction,
  rightButtonTitle 
}) => {
  return (
    <div className="cloud-block">
      <div className="cloud-block__header">
        {(iconName || mdiIcon) && (
          <div
            className={`cloud-block__header_icon-container cloud-block__header_icon-container--${iconContainerColor}`}
            onClick={iconAction || undefined}
            style={{
              backgroundImage: iconName ? `../../../assets/icons/${iconName}.svg)` : '',
              cursor: iconAction ? 'pointer' : 'default',
            }}
          >
            {mdiIcon && <i className="material-icons" style={{ color: mdiIconColor || 'white' }}>{mdiIcon}</i>}
          </div>
        )}
        <div className="cloud-block__header_title">
          {title}
          {infoContent != null && (
            <span className="cloud-block__header_info" onClick={() => alert('s')}>
              i
            </span>
          )}
        </div>
        {rightButtonAction != null && (
          <div className="btn btn--blue-text cloud-block__header_btn" onClick={rightButtonAction}>
            {rightButtonTitle || 'Open'}
          </div>
        )}
      </div>
      <div className="cloud-block__content">{content}</div>
    </div>
  ) 
}

export default CloudBlock;
