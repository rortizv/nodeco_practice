const http = require('http');
const url = require('url');

const callbackDelServidor = (req, res) => {
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual,true);
    const ruta = urlParseada.pathname;
    // 1. Obtener url desde el objeto request
    // 2. Obtener la ruta
    // 3. Enviar una respuesta dependiendo de la ruta
    res.end("Hola fuckers");
}

const server = http.createServer(callbackDelServidor);

server.listen(5000, ()=>{
    console.log('El servidor está escuchando por http://localhost:5000/');
});