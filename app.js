const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


async function valida_pass(usr, pass, callback) {
    console.log(usr, pass);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("yourbank");
        var query = { cpf: usr, senha: pass };
        dbo.collection("clientes").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result.length);
            if (result.length) {
                callback(result);
                return true;
            } else {
                return false;
            }

            db.close();
        });
    });
}

app.get('/', async (req, res) => {
    resultado = await valida_pass(123, "123", function(resultado) {
        return res.send(resultado);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))