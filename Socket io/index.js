
const http = require('http');
const express = require('express');
const socket = require('socket.io')
const cors = require('cors')
var app = express();
app.use(cors())
app.use(express.json())
var server = http.createServer(app)

var io = socket(server, {
    cors: {
        origin: "*"
    }
})
io.on("connection", () => {
    console.log("connection established");

})

app.post("/", function (req, res) {
    console.log(req.body);
    io.emit("new_msg", req.body)

})

server.listen(3000, () => {
    console.log("server listening on port 3000");
})