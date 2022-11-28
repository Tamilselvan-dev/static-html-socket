const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const cors = require('cors');
const port = 3000 || process.env.port;
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin:
      'https://nodexeyiaq-zz0p--8080.local-credentialless.webcontainer.io/',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(socket.id);
});

server.listen(3000, () => {
  console.log(`Server Running on ${port}...`);
});
