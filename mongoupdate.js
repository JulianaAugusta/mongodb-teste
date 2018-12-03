const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("yourbank");
    let i = 1;
    dbo.collection("clientes").find({}).toArray( function (err, clientes) {
        if (err) throw err;
        for (cliente in clientes) {
            let newvalues = { $set: {conta: i, agencia: 1, cpf: 123, senha: "123"} };
            query = {_id:clientes[cliente]._id};
            i++;
            dbo.collection("clientes").updateOne(query, newvalues, function(err, res) {
                if (err) throw err;
                console.log("1 document updated");        
              });
        }
        console.log("Contas alteradas");
        db.close();
    });
});
