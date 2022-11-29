
const sendEmail = (sender, receiver, subject, message) => {

    console.log("*********************************************************")
    console.log('To: ' + receiver)
    console.log('From: ' + sender)
    console.log('Subject: ' + subject)
    console.log("_________________________________________________________")
    console.log(message)
    console.log("*********************************************************")

    const nodeMailer = require('nodemailer')
    const adminEmail = "address adminEmail"
    const adminPassword = "address admin password" ;
    const mailHost = 'smtp.gmail.com'
    const mailPort = 587

    const transporter = nodeMailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false, // if you port 465 true, leave false for another port.
        auth: {
            user: adminEmail,
            pass: adminPassword
        }
    });
    const options = {
        from: sender, // address to send
        to: receiver, // ho got mail
        subject: subject, // subjecct of mail
        text: message // Phần nội dung mail mình sẽ dùng html thay vì thuần văn bản thông thường.
    }
    // hàm transporter.sendMail() này sẽ trả về cho chúng ta một Promise
    // transporter.sendMail()
    // return transporter.sendMail(options)
};
sendEmail(options);


// module.exports = {
//     sendEmail
// }



// const add =(a,b) => {
//     return a+b
// }
// console.log(add(4,6))