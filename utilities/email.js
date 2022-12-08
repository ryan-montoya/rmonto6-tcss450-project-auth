//express is the framework we're going to use to handle requests
const express = require('express')

//retrieve the router object from express
var router = express.Router()
let sendEmail = (sender, receiver, subject, message) => {
    //research nodemailer for sending email from node.
    // https://nodemailer.com/about/
    // https://www.w3schools.com/nodejs/nodejs_email.asp
    //create a burner gmail account 
    //make sure you add the password to the environmental variables
    //similar to the DATABASE_URL and PHISH_DOT_NETKEY (later section of the lab)

    //fake sending an email for now. Post a message to logs.
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Smalltalktcss@gmail.com',
    pass: 'P4$$w0rd'
  }
});

var mailOptions = {
  from: sender,
  to: receiver,
  subject: subject,
  text: message
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
    console.log("*")
    console.log('To: ' + receiver)
    console.log('From: ' + sender)
    console.log('Subject: ' + subject)
    console.log("__")
    console.log(message)
    console.log("*")

}
router.post("/", (request, response) => {
    sender = request.body.sender
    receiver = request.body.receiver
    subject = request.body.subject
    message = request.body.message
    sendEmail = (sender, receiver, subject, message)
});
module.exports = { 
    router
}
