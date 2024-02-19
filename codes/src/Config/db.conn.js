const mysql = require("mysql2");

let pool = mysql.connect({
  host: process.env.DB_HOST || "127.0.0.1",
  database: process.env.DB_NAME || "icons",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  port: process.env.DB_PORT || 3306,
});

pool.connect((err) => {
  if (!err) {
    console.log("Database connected successfully.");
  } else {
    console.log(err);
  }
});

module.exports = pool;
