const express = require('express')
const nodemailer = require("nodemailer")
const cors = require('cors')

const app = express()
app.use(cors())
app.use(cors({origin: true}));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//http://coderhs.com/archive/win10-free80  killPort
// lhejghfomezyzifu

    let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 25,
        secure: false,
        tls: {
            rejectUnauthorized: false
        },
        auth: {
            user: "Palada.transport@gmail.com", // generated ethereal user
            pass: "lhejghfomezyzifu", // generated ethereal password
        },
    });


app.get('/', function (req, res) {
    res.send('Hello World ,page http://localhost:3010/')
    // console.log("test PaGE'/'start page");
})
app.post('/sendMessage', async function (req, res) {
    console.log("app.post, req!!!", req.body);
    // console.log("res",res);
    let {tel, userName, email} = req.body.data
    console.log("tel, userName, email", tel, userName, email);
    let info = await transporter.sendMail({
        from: "lisa Fred Foo 👻" , // sender address
        to: "Palada.transport@gmail.com", // list of receivers
        // to: "lisa15.08patrikeevna@gmail.com", // list of receivers
        subject: "Hello, date from PaladaSite✔", // Subject line
        // text: "Hello world?", // plain text body
        html: ` <b> name: ${userName}</b>
                <div>mail:${email}</div>
                <div>tel:${tel}</div>
             `, // html body
    });
    res.send(`"Hello World! /sendMessage page", req`);
})

// app.listen(3000)
app.listen(3010, function () {
    console.log("app.listen(3010)");

})



