let express = require('express');
let app = express();
//see app is an object and it has many methods like app.get(),app.post(),app.listen()

app.get("/",function(req,res)
        {
          res.send("Hello Express")
        });
//see the above app is an object provided by express and get is one of its function,it takes 1st argument as a string (which is a path currently "/" means the root path i.e the current path where app.listen server is running and it is present is server.js file,so the root becomes the present path or you can think the root is the path where all the files like package.json etc are kept now do not confuse that the root i.e. "/" should mean the root directory of the system,this root directory is a relative root directory it is relative to the folder where the application is being created),and if the path matches to the requested path then the callback function gets triggered,now req and res are the objects provided by express which have several methods bounded to them like res.send etc...

// console.log("Hello Express")



































 module.exports = app;
