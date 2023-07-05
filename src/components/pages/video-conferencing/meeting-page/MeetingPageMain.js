// import React, { useState } from 'react';
// import Webcam from 'react-webcam';



// const MeetingPageMain = () => {
//   return (
//     <div>
//       <h1>Video and Voice App</h1>
//       <h2>Video</h2>
//       <Webcam
//         audio={true}
//         width={1280}
//         height={700}
//         mirrored={true}
//       />
//     </div>
//   );
// }

// export default MeetingPageMain;


import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';

const socket = io('http://localhost:5000'); // Replace with your server address

function MeetingPageMain() {
  const [stream, setStream] = useState(null);
  const [peers, setPeers] = useState([]);

  const userVideoRef = useRef();
  const peersRef = useRef([]);

  useEffect(() => {
    // Get access to user media (camera and microphone)
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        userVideoRef.current.srcObject = stream;

        // Socket events
        socket.emit('join', socket.id);
        socket.on('user-joined', (userId) => {
          // Create a new peer connection
          const peer = createPeer(userId, socket.id, stream);
          peersRef.current.push({
            userId,
            peer,
          });
          setPeers([...peersRef.current]);
        });
        socket.on('user-left', (userId) => {
          // Close the peer connection
          const peerIndex = peersRef.current.findIndex((peer) => peer.userId === userId);
          if (peerIndex !== -1) {
            peersRef.current[peerIndex].peer.destroy();
            peersRef.current.splice(peerIndex, 1);
            setPeers([...peersRef.current]);
          }
        });
        socket.on('signal', ({ senderId, signal }) => {
          // Handle incoming signals (ICE candidates and SDP)
          const peerIndex = peersRef.current.findIndex((peer) => peer.userId === senderId);
          if (peerIndex !== -1) {
            peersRef.current[peerIndex].peer.signal(signal);
          }
        });
      })
      .catch((error) => console.error(error));

    // Clean up
    return () => {
      socket.disconnect();
    };
  }, []);

  const createPeer = (partnerId, callerId, stream) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      // Send the signal to the server
      socket.emit('signal', { senderId: callerId, receiverId: partnerId, signal });
    });

    return peer;
  };

  return (
    <div className="App">
      <h1>Video Call App</h1>
      <div className="video-grid">
        <div>
          <h2>Your Video</h2>
          <video ref={userVideoRef} autoPlay playsInline muted />
        </div>
        {peers.map((peer) => (
          <div key={peer.userId}>
            <h2>Participant Video</h2>
            <video autoPlay playsInline ref={(ref) => (peer.peer.videoRef = ref)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetingPageMain;



