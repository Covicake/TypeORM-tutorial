import * as express from 'express';
import { createConnection } from 'typeorm';
import { ClienteRepositorio } from './Repository/Cliente-Repositorio';

const clienteRepo = new ClienteRepositorio()

createConnection().then(connection => {
}).catch(error => console.log(error));

const app = express();
app.use(express.json);

app.get('/customer', (req, res) => {
    clienteRepo.obtenerListaCLientes().then((resultado) => res.send(resultado));
});

app.get('/customer/:id', (req, res) => {
    clienteRepo.obtenerCliente(req.params.id).then((resultado) => res.send(resultado));
})

app.post('/customer', (req, res) => {
    clienteRepo.crearCliente(req.body).then((resultado) => res.send(resultado));
})

app.put('/customer/:id', (req, res) => {
    clienteRepo.actualizarCliente(req.params.id, req.body).then(() => res.send('OK'));
})

app.delete('/customer/:id', (req, res) => {
    clienteRepo.eliminarCliente(req.params.id).then(() => res.send('OK'));
})

app.listen(3000, () => {
    console.log('Ready on port 3000!');
});