const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));
app.get('/',(req,rest) => rest.sendFile(path.resolve(__dirname, './views/home.html')));
app.post('/',(req,rest) => rest.sendFile(path.resolve(__dirname, './views/home.html')));
app.get('/pepe',(req,rest) => rest.sendFile(path.resolve(__dirname, './views/registro.html')));
app.get('/register',(req,rest) => rest.sendFile(path.resolve(__dirname, './views/register.html')));
app.get('/empty',(req,rest) => rest.sendFile(path.resolve(__dirname, './views/empty.html')));
app.get('/mensaje',(req,rest) => rest.sendFile(path.resolve(__dirname, './views/mensaje.html')));
app.get('/login',(req,rest) => rest.sendFile(path.resolve(__dirname, './views/login.html')));
app.listen(3000, () => console.log("Servidor corriendo en el puerto: 3000"));
