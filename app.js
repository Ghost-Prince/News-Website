const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended : true
}));

app.get("/",function(req,res) {
    res.render("homepage");
});

let API_KEY = "";       // get your own API key from https://open-platform.theguardian.com/access/
let URL = "https://content.guardianapis.com/search?q=";

app.get("/:topic",function(req,res) {
    var articleTitle = [], articleUrl = [];
    let tempURL = URL;
    tempURL+= req.params.topic;
    tempURL+= ("&api-key=" + API_KEY);
    https.get(tempURL,function(result) {
        result.on("data",function(data) {
            const receivedData = JSON.parse(data);
            for(var index=0; index<receivedData.response.results.length; index++) {
                articleTitle.push(receivedData.response.results[index].webTitle);
                articleUrl.push(receivedData.response.results[index].webUrl);
            }
            res.render("content",{
                topicName : req.params.topic.toUpperCase(),
                articleTitleArray : articleTitle,
                articleUrlArray : articleUrl 
            });
        });
    });
});

app.post("/search",function(req,res) {
    let articleTitle = [], articleUrl = [];
    let tempURL = URL;
    tempURL+= req.body.searchQuery;
    tempURL+= ("&api-key=" + API_KEY);
    https.get(tempURL,function(result) {
        result.on("data",function(data) {
            const receivedData = JSON.parse(data);
            for(var index=0; index<receivedData.response.results.length; index++) {
                articleTitle.push(receivedData.response.results[index].webTitle);
                articleUrl.push(receivedData.response.results[index].webUrl);
            }
            res.render("content",{
                topicName : req.body.searchQuery.toUpperCase(),
                articleTitleArray : articleTitle,
                articleUrlArray : articleUrl 
            });
        });
    });
});

app.listen(3000,function() {
    console.log("Server is running on port 3000.");
});
