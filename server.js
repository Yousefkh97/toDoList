const express = require('express')
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('public'));
const mongoose = require('mongoose');
const url = "mongodb+srv://nimer:N1N1N1N1@cluster0.tejcy.mongodb.net/toDo";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model("User", {
    userEmail: String,
    firstName: String,
    lastName: String,
    imgUrl: String,
    password: String
})
const Task = mongoose.model("Task", {
    user: {
        userEmail: String,
        firstName: String,
        lastName: String,
        imgUrl: String,
        password: String
    },
    taskTitle: String,
    taskContent: String,
    done: Boolean
})

app.post('/api/login', (req, res) => {
    const { mail, password } = req.body;
    User.find({ userEmail: mail, password: password })
        .then(doc => {
            res.send({ success: (doc.length == 0) ? false : true })
        })
})

app.post('/api/register', (req, res) => {
    const { mail, firstName, lastName, imgUrl, password } = req.body;
    User.find({ userEmail: mail })
        .then(doc => {
            if (doc.length == 0) {
                const newUser = new User({
                     userEmail: mail, firstName: firstName,lastName:lastName,imgUrl:imgUrl,password:password
                 });
                 newUser.save().then(res.send({success: true})); 
            }
            else{
                res.send({success: false})
            }
        })
})

// app.post('/api/addtask', (req, res) => {
//     const { userEmail, firstName, lastName, imgUrl, password } = req.body;
//     User.find({ userEmail: userEmail })
//         .then(doc => {
//             if (doc.length == 0) {
//                 const newUser = new User({
//                      userEmail: userEmail, firstName: firstName,lastName:lastName,imgUrl:imgUrl,password:password
//                  });
//                  newUser.save().then(res.send(true)); 
//             }
//             res.send(false)
//         })
// })



const port = process.env.PORT || 4000;
app.listen(port, () => { console.log("App is Listening on port", port) })
