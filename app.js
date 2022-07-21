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

// sql = "select * from board";

// connection.query(sql, function(err, rows, fields){
// 	if(err) console.log(err);
//     console.log(rows);
//     console.log(fields)
//     });
// connection.end();
var express = require('express');
var app = express();
var db_config = require(__dirname + '/config/database.js');
var conn = db_config.init();
var bodyParser = require('body-parser');
db_config.connect(conn);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', function (req, res) {
    res.send('ROOT');
});
app.get('/write', function (req, res) {
  res.render('write.ejs');
});
app.post('/write', function(req,res){
  var id = req.body.id;
  var file = req.body.chooseFile;
  var title = req.body.title;
  var content = req.body.content;
  var datas = [id,file,title,content];
  var sql = "insert into board(userid,userimg,title, content, viewc,regdate)values(?,?,?,?,0,now())";
  conn.query(sql, datas, function (err,rows){
      if(err) console.error("err:"+err);
  res.redirect('post2');
});
});