import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var itemList = []; 
var workOn = [];
var todaysList = [];

app.get("/today", (req, res) => {
    res.render("today.ejs", {toDoItems: todaysList});
});

app.get("/work", (req, res) => {
    res.render("work.ejs", {workingItems: workOn});
});

app.get("/", (req, res) => {
    res.render("index.ejs", {items : itemList});   
});

app.post("/today", (req, res) => {
    const newItem = req.body["newItem"];
    todaysList.push(newItem);
    itemList.push(newItem);
    res.render("today.ejs", {toDoItems: todaysList});
    
});

app.post("/work", (req, res) => {
    const workItem = req.body["workItem"];
    workOn.push(workItem);
    itemList.push(workItem);
    res.render("work.ejs", {workingItems: workOn});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});