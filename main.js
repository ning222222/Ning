// const express = require('express');
// const app = express();
// pool = require("./config/database"),
// bodyParser = require('body-parser')

// //Middleware Set (2)
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended : true}))

// /* POST : New User (3) */ 
// app.post("/", (req,res) => {
// //Request Param 추출
// const param = [req.body.idx, req.body.userid, req.body.userimg, req.body.title,
//               req.body.content, req.body.viewc, req.body.regdate]
// //pool 실행
// pool((sql) => {
//   //sql를 매개 변수 설정 시, sql.query로 sql Query 작성
//   //데이터를 넣을 곳에 ?를 넣어 뒤의 매개 변수 param가 ?에 들어감
//   sql.query("insert into tbl_user value(?,?,?,?,?,?,?)", param, (err, doc) => {
//       //err가 있으면 err를 출력하고, 없으면 true를 보내줌
//       err ? console.log(err) : res.send({result : true})
//   })
//   //DB 연결 해제
//   sql.release()
// })
// })

// /* Get : Get Users (4) */ 
// app.get("/", (req,res) => {
// pool((sql) => {
//   //가져온 DB 정보가 row에 배열 형식으로 담김
//   sql.query("select * from board", (err, row) => {
//       //err가 없으면 결과를 보내줌
//       err ? console.log(err) : res.send({result : row})
//   })
//   //DB 연결 해제
//   sql.release()
// })
// })

