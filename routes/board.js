
// // const express = require('express');
// // const router = express.Router;
// // const mysql_odbc = require('../config/database');
// // const conn = mysql_odbc.init();


// var express = require('express');
// var app = express();
// var db_config = require('/config/database.js');
// var conn = db_config.init();
// var bodyParser = require('body-parser');
// // router.get('/write',function(req,res,next)
// // {res.redirect('/board/list/1');
// //         });

// app.get('/write',function(req,res,next){
//     res.render('wirte',{title:'게시판 글쓰기'});
// });

// // router.get('/list/:page', function(req, res, next)
// //  {var page = req.params.page;
// //         var sql = "select idx,userid, userimg, title, content, viewc, regdate(modidate,'%Y-%m-%d %H:%i:%s') modidate, " +
// //                     "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate from board";    
// //         conn.query(sql, function (err, rows) {        if (err) console.error("err : " + err);
// //         res.render('list', {title: '게시판 리스트', rows: rows});
// //         });
// //     });

//     app.post('/write', function(req,res,next){
//         var id = req.body.id;
//         var file = req.body.chooseFile;
//         var title = req.body.title;
//         var content = req.body.content;
//         var datas = [id,file,title,content];
//         var sql = "insert into board(userid,userimg,title, content, viewc,regdate)values(?,?,?,?,0,now())";
//         conn.query(sql, datas, function (err,rows){
//             if(err) console.error("err:"+err);
//         res.redirect('post2');
//     });
// });

// module.exports = router;

