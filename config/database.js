// const mysql = require("mysql");
//   //DB 정보 선언
// const connection =mysql.createConnection ({
//     host:'localhost',
//     user : 'root',
//     password : '1234',
//     port : '3306',
//     database : 'universing'
//   });
// connection.connect();


// var router = express.Router();
// var mysql = require('mysql');

// router.get('/', function(req,res,next){

//     var connection = mysql.createConnection({
//         host : 'localhost',
//         port : 3306,
//         user : 'root',
//         password : '1234',
//         database : 'universing'
//     });

//     connection.connect(function(err) { 
//         if(err) {
//             res.render('mysql', {connect : '연결실패', err:err});
//             console.error(err);
//             throw err;
//         } else {
//             res.render('mysql', {connect : '연결성공!!!', err : '없음'})
//         }
//     });
//     connection.end();
// });

// module.exports = router;

const mysql = require("mysql");
  //DB 정보 선언
 var db_info = {
    host : 'localhost',
  port : 3306,
  user : 'root',
   password : '1234',
   database : 'universing'
  },
  //pool에 DB 정보를 담아 연결한 Pool 저장
  pool = mysql.createPool(db_info)

//모듈화
module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}