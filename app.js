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

app.get("/programming",function(req,res) {
    var articleTitle = [], articleUrl = [];
    URL+= "programming";
    URL+= ("&api-key=" + API_KEY);
    console.log(URL);
    https.get(URL,function(result) {
        result.on("data",function(data) {
            const receivedData = JSON.parse(data);
            for(var index=0; index<receivedData.response.results.length; index++) {
                articleTitle.push(receivedData.response.results[index].webTitle);
                articleUrl.push(receivedData.response.results[index].webUrl);
            }
            res.render("content",{
                topicName : "Programming",
                articleTitleArray : articleTitle,
                articleUrlArray : articleUrl 
            });
        });
    });
});

app.get("/smartphones",function(req,res) {
    var articleTitle = [], articleUrl = [];
    URL+= "smartphones";
    URL+= ("&api-key=" + API_KEY);
    console.log(URL);
    https.get(URL,function(result) {
        result.on("data",function(data) {
            const receivedData = JSON.parse(data);
            for(var index=0; index<receivedData.response.results.length; index++) {
                articleTitle.push(receivedData.response.results[index].webTitle);
                articleUrl.push(receivedData.response.results[index].webUrl);
            }
            res.render("content",{
                topicName : "Smartphones",
                articleTitleArray : articleTitle,
                articleUrlArray : articleUrl 
            });
        });
    });
});

app.get("/laptops",function(req,res) {
    var articleTitle = [], articleUrl = [];
    URL+= "laptops";
    URL+= ("&api-key=" + API_KEY);
    console.log(URL);
    https.get(URL,function(result) {
        result.on("data",function(data) {
            const receivedData = JSON.parse(data);
            for(var index=0; index<receivedData.response.results.length; index++) {
                articleTitle.push(receivedData.response.results[index].webTitle);
                articleUrl.push(receivedData.response.results[index].webUrl);
            }
            res.render("content",{
                topicName : "Laptops",
                articleTitleArray : articleTitle,
                articleUrlArray : articleUrl 
            });
        });
    });
});

app.get("/gaming",function(req,res) {
    var articleTitle = [], articleUrl = [];
    URL+= "gaming";
    URL+= ("&api-key=" + API_KEY);
    console.log(URL);
    https.get(URL,function(result) {
        result.on("data",function(data) {
            const receivedData = JSON.parse(data);
            for(var index=0; index<receivedData.response.results.length; index++) {
                articleTitle.push(receivedData.response.results[index].webTitle);
                articleUrl.push(receivedData.response.results[index].webUrl);
            }
            res.render("content",{
                topicName : "Gaming",
                articleTitleArray : articleTitle,
                articleUrlArray : articleUrl 
            });
        });
    });
});

app.get("/AI",function(req,res) {
    var articleTitle = [], articleUrl = [];
    URL+= "artificial%20intelligence";
    URL+= ("&api-key=" + API_KEY);
    console.log(URL);
    https.get(URL,function(result) {
        result.on("data",function(data) {
            const receivedData = JSON.parse(data);
            for(var index=0; index<receivedData.response.results.length; index++) {
                articleTitle.push(receivedData.response.results[index].webTitle);
                articleUrl.push(receivedData.response.results[index].webUrl);
            }
            res.render("content",{
                topicName : "Artificial Intelligence",
                articleTitleArray : articleTitle,
                articleUrlArray : articleUrl 
            });
        });
    });
});

app.listen(3000,function() {
    console.log("Server is running on port 3000.");
});
