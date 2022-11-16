// first import install libery 

var express = require("express");
var bodyParse = require("body-parser");
var mongoose = require("mongoose");
const e = require("express");

//create app

const app = express()

app.use(bodyParse.json())
app.use(express.static('public'))
app.use(bodyParse.urlencoded({
    extended: true
}))

// conect database


mongoose.connect('mongodb://0.0.0.0:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var db = mongoose.connection;

// check connect

db.on('error', () => console.log("error in connecting database"));
db.once('open', () => console.log("Connected to Database"));


app.get("/", (req, res) => {

    res.set({
        "Allow-access-Allow-Origin": '*'
    })

    return res.redirect('index.html');

}).listen(3000);



app.post("/login", async (request, response) => {
    try {
        //adding
        const username = request.body.username;
        const password = request.body.password;

        const usermail = db.collection('users').findOne({ email: username }, (err, res) => {
            if (res == null) {
                response.send("Invalid information!❌❌❌! Please create account first");
            }
            else if (err) throw err;


            if (res.password === password) {
                return response.redirect('login.html');
            }
            else {
                response.send("Invalid Password!❌❌❌");
            }


        });
    }
    catch (error) {
        response.send("Invalid information❌");
    }

})