
// const express = require("express");
// app = express();
// app.use(express.static("public"))
// app.set('view engine','ejs');
// app.set('views', './views/')
// app.engine('ejs', require('ejs').__express);
// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// var mysqlRouter = require('./config/database');
// app.use('/mysql', mysqlRouter);

// //  var boardRouter = require('./routes/board');
// //  app.use('/write', boardRouter);
// //  app.use('/list', boardRouter);
// var db_config = require(__dirname + '/config/database.js');
// var conn = db_config.init();
// var bodyParser = require('body-parser');

// db_config.connect(conn);





// app.post('/write', function(req,res,next){
//     var id = req.body.id;
//     var file = req.body.chooseFile;
//     var title = req.body.title;
//     var content = req.body.content;
//     var datas = [id,file,title,content];
//     var sql = "insert into board(userid,userimg,title, content, viewc,regdate)values(?,?,?,?,0,now())";
//     conn.query(sql, datas, function (err,rows){
//         if(err) console.error("err:"+err);
//     res.redirect('post2');
// });
// });


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

// const models = require("./models/index.js");

// models.sequelize.sync().then( () => {
//   console.log(" DB 연결 성공");
// }).catch(err => {
//   console.log("연결 실패");
//   console.log(err);
// });

//
var express = require('express');
var app = express();
var db_config = require(__dirname + '/config/database.js');
var conn = db_config.init();
var bodyParser = require('body-parser');
db_config.connect(conn);
app.use(express.static("public"))
app.use(express.static("views"));
app.set('view engine','ejs');
app.set('views', './views/')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.engine('ejs', require('ejs').__express);
app.listen(8080, function(){

});



app.get('/post2_insert2',function(req,res){
    res.render('write2.ejs')
});
// app.get('/post',function(req,res){
//     res.render('post.ejs')
// });
app.get('/post2_insert',function(req,res){
    res.render('write.ejs')
});
app.get('/postview', function (req, res) {
    res.render('postView.ejs');
});
app.get('/', function (req, res) {
    res.send('메인');
});


app.get('/post2', function (req, res) {
    var sql = 'SELECT * FROM board';    
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('post2.ejs', {rows : rows});
    });
});

app.get('/post', function (req, res) {
    var sql = 'SELECT * FROM board2';    
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        else res.render('post.ejs', {rows : rows});
    });
});

app.post('/write', function(req,res,next){
    console.log('req.body',req.body);
  var userid = req.body.id;
  var file = req.body.chooseFile;
  var title = req.body.title;
  var content = req.body.content;
  var sql = "insert into board(userid,title,content,viewc,regdate) values(?,?,?,0,now())";
  var datas = [userid,title,content];
  conn.query(sql, datas, function (err,rows,fields){
      if(err) console.error("err:" +err);
  res.redirect('post2');
});
});
app.post('/write2', function(req,res,next){
    console.log('req.body',req.body);
  var userid = req.body.id;
  var file = req.body.chooseFile;
  var title = req.body.title;
  var content = req.body.content;
  var sql = "insert into board2(userid,title,content,viewc,regdate) values(?,?,?,0,now())";
  var datas = [userid,title,content];
  conn.query(sql, datas, function (err,rows,fields){
      if(err) console.error("err:" +err);
  res.redirect('post');
});
});

app.post('/comment',function(req,res,next){
    console.log('req.body',req.body);
    var bid = req.body.idx;
    var userid = req.body.id;
    var content = req.body.content;
    var sql = "insert into reply(con_cum,userid,content,regdate) values(?,?,?,now())";
    var datas = [bid,userid,content];
    conn.query(sql,datas,function(err,rows,fields){
        if(err) console.error(err);
    res.render('post', {title:"글 상세"});
    });
})
app.get('/postView/:idx',function(req,res,next){
    var idx = req.params.idx;
    var sql = "SELECT idx, userid, title, content,viewc,date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate from board where idx=?";
    conn.query(sql,[idx],function(err,rows){
        if(err) console.error(err);
    res.render('postView', {title:"글 상세", rows:rows[0]});
    });
});
app.get('/postView/:idx',function(req,res,next){
    var idx = req.params.idx;
    var sql = 'SELECT * FROM reply';    
    conn.query(sql,function(err,rows){
        if(err) console.error(err);
    res.render('postView', {title:"댓글", rows:rows[0]});
    });
    // var idx = req.params.idx;
    // var sql = "SELECT idx, userid, title, content,viewc,date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate from board where idx=?";
    // conn.query(sql,[idx],function(err,rows){
    //     if(err) console.error(err);
    // res.render('postView', {title:"글 상세", rows:rows[0]});
    // });
});
