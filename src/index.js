let express = require("express");
let app= express();

let route = require("./Schedular.js");
app.use("/",route);
let router = express.Router();
app.listen(process.env.PORT || 3000, function(){
    console.log("running at "+(process.env.PORT||3000))
 })