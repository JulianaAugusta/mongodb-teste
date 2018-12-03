const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("yourbank");
    var query = { nome: /r/ };
    dbo.collection("clientes").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
