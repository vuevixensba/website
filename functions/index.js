
'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(
    `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
const APP_NAME = 'vue-vixens';

//notify admin of request

exports.requestSkulk = functions.database.ref('/requests')
  .onWrite(event => {
      const data = event.data.val();
      return requestSkulk(data);
});

function requestSkulk(data) {
  const mailOptions = {
    from: '"Vue Vixens Web" <noreply@vue-vixens.firebaseapp.com>',
    to: 'jen.looper@progress.com'
  };
  mailOptions.subject = `New Request for a Skulk!`;
  mailOptions.text = `A new skulk was just requested `+JSON.stringify(data);
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('Alert email sent');
  });
}

//notify of registrants

exports.registerForSkulk = functions.database.ref('/registration')
  .onWrite(event => {
      const data = event.data.val();
      return registerForSkulk(data);
});

function registerForSkulk(data) {
  const mailOptions = {
    from: '"Vue Vixens Web" <noreply@vue-vixens.firebaseapp.com>',
    to: 'jen.looper@progress.com'
  };
  mailOptions.subject = `New Vue Vixens registration!`;
  mailOptions.text = `A registration just came through `+JSON.stringify(data);
  return mailTransport.sendMail(mailOptions).then(() => {
    console.log('Alert email sent');
  });
}



