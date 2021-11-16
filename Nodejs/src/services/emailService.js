import nodemailer from "nodemailer";
require('dotenv').config()

let sendSimpleEmail = async (dataSend) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Pho dep trai oiw 👻" <luupho99@gmail.com>', // sender address
        to: dataSend.receiverEmail, // list of receivers
        subject: "Hello ✔", // Subject line
        html: getBodyHTMLEmail(dataSend),
    });


}
let getBodyHTMLEmail = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result = `
        <h3>Xin chao ${dataSend.patientName}</h3>
        <p>Ban nhan duoc email nay vi da dat lich kham benh online gui tu Pho dep trai</p>
        <p>Thong tin dat lich kham benh: </p>
        <div><b>Thoi gian: ${dataSend.time}</b></div>
        <div><b>Bac si: ${dataSend.doctorName}</b></div>

        <p>Neu cac thong tin tren la dung su that vui long click vao link ben duoi 
        de xac nhan va hoan tat thu tuc dat lich kham benh</p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
        </div>

        <div>Xin chan thanh cam on!</div>
        `
    }
    if (dataSend.language === 'en') {
        result = `
        <h3>Dear ${dataSend.patientName}</h3>
        <p>You received this email because you booked an online medical appointment on the Pho dep trai</p>
        <p>Information to schedule an appointment: </p>
        <div><b>Time: ${dataSend.time}</b></div>
        <div><b>Doctor: ${dataSend.doctorName}</b></div>

        <p>If the above information is true, please click on the link below to confirm and complete the procedure to book an appointment</p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
        </div>

        <div>Sincerely thank!</div>
        `
    }
    return result
}
module.exports = {
    sendSimpleEmail: sendSimpleEmail
}