let express = require('express');
let app = express();


//see in the below route handler i.e we say app.get as the route handler because its first argument is the route and the 2nd argument is the callback function we call as handler because we handle some stuffs in the function,now see the res.sendFile method requires the absolute path i.e the path wrt to the root of the servers(remote computer or the computer at the backend or on cloud where we have hosted our backend) root directory,so __dirname will give the present directory from the servers root path hence we call it as absoloute path
app.get("/",function(req,res)
        {
          res.sendFile(__dirname+"/views/index.html")
        })






































 module.exports = app;
