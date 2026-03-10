const express=require("express")
const app=express();
const port=3000
const morgan=require("morgan")
app.use(morgan("combined"))

const path=require("path")

app.use(express.static(path.join(__dirname,"public")))
const cors=require("cors")
app.use(cors())
//create default API ( home)
app.get("/",(req,res)=>{
    
        res.send("Welcome to <font color='red' > K234111E")
})
app.get("/about",(rep,res)=>{
    tbl="<table border='1'>"
    tbl+="<tr>"
    tbl+="<td>STUDENT'S ID :</td><td>SV007</td>"
    tbl+="</tr>"
    tbl+="<tr>"
    tbl+="<td>STUDENT'S NAME:</td><td>TÈO</td>"
    tbl+="</tr>"
    tbl+="</table>"
    tbl+="<tr>"
    tbl+="<td colspan ='2'> <img src ='images/avt.jpg' width='500' height ='250'</td>"
    tbl+="</tr>"
    res.send(tbl)
})
app.listen(port,()=>{
    console.log("K234111E Server running at ${port}")
})
let database=[
{"BookId":"b1","BookName":"Kỹ thuật lập trình cơ bản",
"Price":70,"Image":"b1.png"},
{"BookId":"b2","BookName":"Kỹ thuật lập trình nâng cao",
"Price":100,"Image":"b2.png"},
{"BookId":"b3","BookName":"Máy học cơ bản","Price":200,"Image":"b3.png"},
{"BookId":"b4","BookName":"Máy học nâng cao","Price":300,"Image":"b4.png"},
{"BookId":"b5","BookName":"Lập trình Robot cơ bản","Price":250,"Image":"b5.png"},
]
app.get("/books",(req,res)=>{
    res.send(database)
})