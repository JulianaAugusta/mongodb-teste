const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("yourbank");
  const cliente = { nome: "Julia", transacoes: {
    valor: 8000,
    data: new Date()
  },
 };
  dbo.collection("clientes").insertOne(cliente, function(err, res) {
    if (err) throw err;
    console.log("1 cliente inserido");
    db.close();
  });
});
