import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

export const joinRoom = (roomId) => {
  socket.emit('join-room', roomId);
};

export const sendMessage = (roomId, message) => {
  socket.emit('send-message', { roomId, message });
};

export const onReceiveMessage = (callback) => {
  socket.on('receive-message', callback);
};

export default socket;
