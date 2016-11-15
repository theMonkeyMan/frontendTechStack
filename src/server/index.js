const http = require('http');

const socketIo = require('socket.io');

const fs = require('fs');

const path = require('path');

const handler = (req, res) => {
  console.info(req.url);
// fs.readFile(path.join(`${__dirname}/../../dist`, 'index.html'), (err, data) => {
//   if (err) {
//     console.info(`${__dirname}/index.html`);
//     res.writeHead(500);
//     return res.end('Error loading index.html');
//   }

  res.writeHead(200);
  res.end();
// });
}

const appServer = http.createServer(handler);

appServer.listen(8000);

const io = socketIo(appServer);

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.emit('news', '欢迎连接');
  socket.on('toServerNews', (data) => {
    console.log(socket.id);
    socket.broadcast.emit('news', data);
  });
})