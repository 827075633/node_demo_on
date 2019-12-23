var koa = require('koa')
const app = new koa()
const router = require('koa-router')
const Router = new router()
// var app = require('express')(); //express 写法
var http = require('http').Server(app)
var io = require('socket.io')(http)
// express 写法
// app.get('/',function(req, res){
//     res.sendFile(__dirname + '/index.html');
// })
Router.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html');
})

io.on('connection',function(socket) {
    console.log('a user connected') //当有用户连接成功
    // 相应用户发送的信息
    socket.on('chat message',function(msg) {
        console.log('message' + msg)

        //广播给所有人
        io.emit('chat message', msg)

        //广播给除了发送者外的所有人
        //socket.broadcast.emit('chat message', msg)
    })

    socket.on('disconnect',function() {
        console.log('user disconnected') //当有用户关闭连接
    })
})

http.listen(3000, function() {
    console.log('http listen 3000')
})