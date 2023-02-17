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

/*
{
    "response": {
        "status": "ok",
        "userTier": "developer",
        "total": 9324,
        "startIndex": 1,
        "pageSize": 10,
        "currentPage": 1,
        "pages": 933,
        "orderBy": "relevance",
        "results": [
            {
                "id": "uk-news/2022/dec/27/walkers-upland-britain-told-not-rely-on-smartphones-rescuers-compass-maps",
                "type": "article",
                "sectionId": "lifeandstyle",
                "sectionName": "Life and style",
                "webPublicationDate": "2022-12-27T16:12:06Z",
                "webTitle": "Hill walkers in UK urged not to rely on smartphones",
                "webUrl": "https://www.theguardian.com/uk-news/2022/dec/27/walkers-upland-britain-told-not-rely-on-smartphones-rescuers-compass-maps",
                "apiUrl": "https://content.guardianapis.com/uk-news/2022/dec/27/walkers-upland-britain-told-not-rely-on-smartphones-rescuers-compass-maps",
                "isHosted": false,
                "pillarId": "pillar/lifestyle",
                "pillarName": "Lifestyle"
            }
        ]
    }
}
*/
