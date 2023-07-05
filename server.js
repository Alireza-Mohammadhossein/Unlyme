const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 5000;
const peers = new Map(); // Store active peers

io.on('connection', (socket) => {
  socket.on('join', (userId) => {
    // Broadcast user join event to existing peers
    peers.forEach((_, participantId) => {
      socket.to(participantId).emit('user-joined', userId);
    });

    // Add the new participant to the peers map
    peers.set(userId, socket);

    // Send signal to existing peers
    peers.forEach((existingSocket, participantId) => {
      if (participantId !== userId) {
        existingSocket.emit('user-joined', userId);
      }
    });
  });

  socket.on('signal', ({ senderId, receiverId, signal }) => {
    // Send the signal to the receiver
    const receiver = peers.get(receiverId);
    if (receiver) {
      receiver.emit('signal', { senderId, signal });
    }
  });

  socket.on('disconnect', () => {
    // Remove the participant from the peers map
    peers.delete(socket.id);

    // Broadcast user left event
    peers.forEach((existingSocket) => {
      existingSocket.emit('user-left', socket.id);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
