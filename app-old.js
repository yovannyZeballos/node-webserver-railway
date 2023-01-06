
const http = require('http');

http.createServer( (req, res) => {
    res.write('Hola mundo');
    res.end();
})
.listen(8084);

console.log('Escuchando el puerto',8084);