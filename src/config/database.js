const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"sesi",
    database: "delivery"
    })

    connection.connect(function(err) {
        if (err) {
            throw new Error("Erro ao conectar MYSQL", erro);

        return;
        }

         console.log("MySql conectado com sucesso!!!")

    });

   

    module.exports = connection;
