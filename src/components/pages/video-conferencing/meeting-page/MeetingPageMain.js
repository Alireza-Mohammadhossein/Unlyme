import React, { useState } from 'react';
import Webcam from 'react-webcam';



const MeetingPageMain = () => {
  const videoConstraints = {
    aspectRatio: 1.8,
    facingMode: "user"
  };

  return (
    <div className="meeting-page_main-wrapper">
      <div className='video_host'>
        <Webcam
          audio={true}
          mirrored={true}
          imageSmoothing={true}
          screenshotFormat='image/webp'
          videoConstraints={videoConstraints}
        />
      </div>
    </div>
  );
}

export default MeetingPageMain;