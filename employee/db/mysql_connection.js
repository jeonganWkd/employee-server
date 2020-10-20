//mysql db에 접속하는 커넥션을 여기서 만들고, 다른 파일에서 쓸 수 있게 한다
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWD,
    waitForConnections: true,
    connectionLimit: 10,
  });

module.exports = connection