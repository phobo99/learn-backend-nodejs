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
        from: '"Bookingcare.vn" <luupho99@gmail.com>', // sender address
        to: dataSend.receiverEmail, // list of receivers
        subject: "Xác nhận đặt lịch khám bệnh Bookingcare.vn ✔", // Subject line
        html: getBodyHTMLEmail(dataSend),
    });


}
let getBodyHTMLEmail = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result = `
        <h3>Xin chào ${dataSend.patientName}</h3>
        <p>Cảm ơn bạn đã sử dụng dịch vụ của Booking care và đặt lịch khám bệnh chuyên nghiệp cùng chúng tôi</p>
        <h3>Thông tin đặt lịch khám bệnh: </h3>
        <div><b>Thời gian: ${dataSend.time}</b></div>
        <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

        <p>Nếu các thông tin trên là đúng với thông tin của bệnh nhân, 
        vui lòng Click vào link bên dưới để xác nhận và hoàn tất 
        thủ tục đặt lịch khám bệnh</p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank"
        style="background-color: #1F7F4C; font-size: 18px; 
        font-family: Helvetica, Arial, sans-serif; 
        font-weight: bold; text-decoration: none; 
        padding: 14px 20px; color: #ffffff; border-radius: 5px; 
        display: inline-block; mso-padding-alt: 0;"
        >
        Xác nhận
        </a>
        </div>
        <br/>
        <div>Xin chân thành cảm ơn!</div>
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
        <a href=${dataSend.redirectLink} target="_blank"
        style="background-color: #1F7F4C; font-size: 18px; 
        font-family: Helvetica, Arial, sans-serif; 
        font-weight: bold; text-decoration: none; 
        padding: 14px 20px; color: #ffffff; border-radius: 5px; 
        display: inline-block; mso-padding-alt: 0;"
        >
        Click here
        </a>
        </div>

        <div>Sincerely thank!</div>
        `
    }
    return result
}
let getBodyEmailRemedy = (data) => {
    let result = '';
    if (data.language === 'vi') {
        result =
            `
            <h3>Xin chào ${data.patientName}!</h3>
            <p>Bạn nhận được email này vì đã dặt lịch khám bệnh trên Bookingcare!</p>
            <p>Thông tin đơn thuốc/ hoá đơn được gửi trong file đính kèm</p>
            
            <div>Xin chân thành cảm ơn!</div>
            `
    }
    if (data.language === 'en') {
        result =
            `
            <h3>Dear ${data.patientName}!</h3>
            <p>You received this email because you booked an online medical appointment on the Bookingcare!</p>
            <p>Prescription/invoice information is sent in the attached file</p>
            
            <div>Sincerely thank!</div>
            `
    }
    return result
}
let sendAttachment = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
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
            let extension = 'png' || 'jpg' || 'jpge'
            let info = await transporter.sendMail({
                from: '"Bookingcare.vn" <luupho99@gmail.com>', // sender address
                to: data.email, // list of receivers
                subject: "Kết quả đặt lịch khám bệnh ✔", // Subject line
                html: getBodyEmailRemedy(data),
                attachments: [
                    {   //encoded string as an attachment
                        filename: `remedy-${data.patientId}-${new Date().getTime()}.${extension}` ,
                        content: data.imgBase64.split('base64,')[1],
                        encoding: 'base64'
                    }
                ]
            })
            resolve(true)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    sendSimpleEmail: sendSimpleEmail,
    sendAttachment: sendAttachment
}