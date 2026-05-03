import { Server } from 'socket.io';

export const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('User connected: ' + socket.id);

    socket.on('join-room', (roomId) => {
      socket.join(roomId);
      console.log('User joined room: ' + roomId);
    });

    socket.on('send-message', (data) => {
      socket.to(data.roomId).emit('receive-message', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected: ' + socket.id);
    });
  });

  return io;
};
