
const express = require("express");
const cors = require('cors');
const mysql = require("mysql"); 

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'login'
});

db.connect((err)=>{
    if(err){
        console.log('Error in connection!!'+ err);  
    }else
    console.log(' mysql connected!!');
})

app.post("/register", (req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
    'INSERT INTO userinfo VALUES(?, ?, ?)',
    [username, email, password],                                     
    (err, result)=>{
        if(err) {throw err};
        console.log(result);
        res.send(' Database updated>>>'); 
    });
}); 

app.post("/login", (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;

    db.query(
    'SELECT * FROM userinfo WHERE Email= ? AND Password= ?',
    [email, password],                                     
    (err, result)=>{
        if(err) {res.send({err:err})};
        if (result.length>0){ res.send(result); }
        else { res.send({msg:"Incorrect email/password combination"});}
    });
}); 



app.post("/list", (req, res)=>{
    db.query(
    'SELECT * FROM userlist',                                  
    (err, result)=>{
        if(err) {res.send({err:err})};
        if (result.length>0){ res.send(result); }
        else { res.send({msg:"Incorrect email/password combination"});}
    });
}); 
app.post("/newuser", (req, res)=>{
    Name=req.body.username;
    Shift=req.body.shift;
    db.query('INSERT INTO userlist (Name, Shift) VAlUES(?,1)',[Name],
    (err, result)=>{
        if(err) {throw err};
        res.send(Name); 
    });
    var _id;
    db.query('SELECT Id AS count FROM userlist ORDER BY Id DESC LIMIT 1',
    (err, result)=>{
        if(err) {throw err};
        let results=JSON.parse(JSON.stringify(result));
        _id=results[0].count;
        db.query('CREATE TABLE Persons? (Date int NOT NULL AUTO_INCREMENT, Amount float(4) DEFAULT 0,fat float(3) DEFAULT 0, PRIMARY KEY (Date));',[_id],
            (err, result)=>{
                if(err) {throw err};
        });
        var i;
        for(i=1;i<32;i++){
            db.query('INSERT INTO Persons? VALUES (?, ?, ?)',[_id,i,1,1],
            (err, result)=>{
                if(err) {throw err};
        });
        }
    });
})


app.post("/data", (req, res)=>{
    const R_id = req.body.id;
    console.log(R_id);
    db.query('SELECT * FROM Persons'+ R_id,
    (err, result)=>{
        if(err) {res.send({err:err})};
        if (result.length>0){ res.send(result); }
        else{res.send({msg:" Something went wrong "});}  
    });
}); 

app.post("/dataupdate", (req, res)=>{
        Amount=req.body.user.Amount;
        Fat=req.body.user.fat;
        ddate=req.body.user.Date;
        idd = req.body.id;
        db.query('UPDATE Persons'+idd+' SET Amount=?, fat=? WHERE Date=?',[ Amount, Fat, ddate],
        (err, result)=>{
            if(err) {throw err};
            res.send(result); 
        });
})

app.post("/delete", (req, res)=>{
    idd = req.body.idd
    db.query('DROP TABLE Persons'+ idd,
    (err, result)=>{
        if(err) {throw err};
       // res.send(result); 
    });
    db.query('DELETE FROM userlist WHERE Id=?',[idd],
    (err, result)=>{
        if(err) {throw err};
       // res.send(result); 
    });
})

app.listen(3002, ()=> {
    console.log("Server is running");
})