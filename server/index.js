const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db =mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"garima",
    database:"db1",
});

app.delete("/Delete/:userid", (req,res) =>{
    const name = req.params.userid; 
    db.query("delete from user where userid = ?",name, (err, result)=>{
        if(err)
        console.log(err);
        else
        res.send(result);
    });
});

app.put("/Update",(req,res)=>{
    const userid = req.body.userid;
   const password = req.body.password;
   const username = req.body.username;
   const contact = req.body.contact;
   db.query("update user set contact= ? ,password= ? ,username= ? where userid = ? ",[contact,password,username,userid], (err, result)=>{
    if(err)
      console.log(err);
  else
  res.send(result);
    console.log(result);
    console.log(userid,password,contact,username);
});
});


app.get("/Getdata",(req, res) => {
  db.query("select * from user",(err,result) =>{
  res.send(result);
  console.log(result);
  console.log(err);
    });
});


app.post("/Login",(req, res)=>{
    const userid = req.body.userid;
    const password = req.body.password;

    db.query(
        "select userid,password from user where userid = ? and password = ? ",
        [userid, password],
        (err, result) => {
            if (err){
                res.send({err: err});
            }
            if(result.length > 0 ){
                res.send(result);
            }else{
                res.send({ message: "Wrong/Null Userid or Password!!!" });
            }
        }
    );
});
 
app.post('/Add',(req,res)=>{
    const userid = req.body.userid;
    const password = req.body.password;
   
    db.query(
        "insert into user (userid, password) values (?,?) ", [userid, password], (err, result) => {
            if (err)
                console.log(err);
            else
                res.send({message:"user entered into database"});
            
            }
            );
});

app.listen(3001,() =>{
    console.log("running on port 3001")
});