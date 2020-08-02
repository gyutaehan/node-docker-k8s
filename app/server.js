import * as http from 'http';

const port = 3001;
const hostname = '0.0.0.0'

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Node!\n');
}).listen(port, hostname, console.log(`Server running at http://${hostname}:${port}/`)
);