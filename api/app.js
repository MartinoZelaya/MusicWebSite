//IMPORTAR PG PARA ADMINISTRAR BASES DE DATOS
const { Pool } = require('pg');
//IMPORTAR EXPRESS
var express = require('express');
var app = express()
//IMPORTAR BODYPARSER 
const bodyParser = require('body-parser');
let jsonParser = bodyParser.json()

//CONFIGURAR LA BASE DE DATOS
const config = {
    host: 'localhost',
    user: 'postgres',
    password: 'kaxo8618',
    database: 'musica',
    port: 5432
}

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
});


//FUNCION ASYNC PARA LISTAR LOS ARTISTAS
app.get('/artist', async function (req, res) {
    const db = new Pool(config);
    let text = `SELECT * FROM "Artista"`;
    const respuesta = await db.query(text)
        .then(response => {
            //console.log(response.rows)
            return response.rows;
        })
        .catch(e => console.error(e.stack))
        res.send(respuesta);
})


//FUNCION ASYNC PARA LISTAR LOS GENEROS
app.get('/genders', async function (req, res) {
    const db = new Pool(config);
    let text = `SELECT * FROM "Genero"`;
    const respuesta = await db.query(text)
        .then(response => {
            //console.log(response.rows)
            return response.rows;
        })
        .catch(e => console.error(e.stack))
        res.send(respuesta);
})

//FUNCION ASYNC PARA LISTAR UNA SOLA MASCOTA EN MODAL
app.get('/modalartist/:id',jsonParser, async function (req, res) {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const db = new Pool(config);
    let text = `SELECT * FROM "Artista" WHERE id = ${id};`    
    const respuesta = await db.query(text)
        .then(response => {
            console.log(response.rows)
            return response.rows;
        })
        .catch(e => console.error(e.stack))
        res.send(respuesta);
})

app.listen(8080);