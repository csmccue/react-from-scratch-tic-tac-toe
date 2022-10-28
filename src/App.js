import './App.css';
import Board from './components/Board/Board';
var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

var io = require('socket.io')(http);

io.on('connection', function(socket) {
  console.log('new connection');

  socket.on('message', function(msg) {
    console.log('Got message from client: ' + msg);
  });
});

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
