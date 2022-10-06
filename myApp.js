let express = require('express');
let app = express();

// const mySecret = process.env['MESSAGE_STYLE']

//see we can also use the route handlers i.e app.get as APIs,apis are nothing but the get,post,put,delete.. requests to the backend and we receive the request and do something either we communicate to the database or we do some calculation on the backend i.e. backend machine so this is an api,now also note that the ip address is equivalent to "/" i.e. in our local computer/server/host machine its ip we know is localhost or 127.0.0.1 and it is equivalent to "/",similarly the remote computers/servers like google.com also means "/" path for the google backend server and it responds with an html file the famous google searchbar.
app.get("/json",function(req,res)
        {
          res.json((process.env.MESSAGE_STYLE==="uppercase")?{"message":"HELLO JSON"}:{"message":"hello json"})
        })

//see the below app.use method is used to mount express.static middleware so that we can use the static files like images and styles.css files used in our html files,so thae first parameter is the path for which express.static will be executed,so whenever in the html file we will be trying to access the static files like images and css we will give some link,so see in the html file we have a static css link i.e. <link rel="stylesheet" hreff="/public/style.css">,now see here href wants to acess /public part so this matches the starting substring "/public",so express.static will be executed and in the static method we have to pass the absolute path of the folder where the static files are kept,so we have given the absolute path of the public folder
app.use("/public",express.static(__dirname+"/public"))



//see in the below route handler i.e we say app.get as the route handler because its first argument is the route and the 2nd argument is the callback function we call as handler because we handle some stuffs in the function,now see the res.sendFile method requires the absolute path i.e the path wrt to the root of the servers(remote computer or the computer at the backend or on cloud where we have hosted our backend) root directory,so __dirname will give the present directory from the servers root path hence we call it as absoloute path
app.get("/",function(req,res)
        {
          res.sendFile(__dirname+"/views/index.html")
        })






































 module.exports = app;
