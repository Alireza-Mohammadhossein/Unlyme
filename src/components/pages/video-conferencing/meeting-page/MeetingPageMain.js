import React, { useState, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';



const MeetingPageMain = () => {
  // const videoConstraints = {
  //   aspectRatio: 1.8,
  //   facingMode: "user"
  // };


  const [deviceId, setDeviceId] = useState({});
  const [devices, setDevices] = useState([]);

  const handleDevices = useCallback(
    mediaDevices =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  useEffect(
    () => {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },
    [handleDevices]
  );

  return (
    <div className="meeting-page_main-wrapper">
      <div className='video_host'>
        {/* <Webcam
          audio={true}
          mirrored={true}
          // videoConstraints={videoConstraints}
        /> */}

        {devices.map((device, key) => (
          <div>
            <Webcam audio={true} videoConstraints={{ deviceId: device.deviceId }} />
            {device.label || `Device ${key + 1}`}
          </div>

        ))}

      </div>
    </div>
  );
}

export default MeetingPageMain;