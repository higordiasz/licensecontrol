import Express from 'express';
import { App } from './bin/App.js';
import http from 'http';

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port))
    return val;
  if (port >= 0)
    return port;
  return false
}

const port = normalizePort(process.env.PORT || 3000);
App.set('port', port);

function onError(error) {
  if (error.syscall !== 'listen')
    throw error;
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

const server = http.createServer(App);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log(`API is alive on ${port}!`);
