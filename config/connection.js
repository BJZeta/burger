var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}



connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;