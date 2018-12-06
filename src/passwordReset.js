require("env2")("./config.env");
const nodemailer = require("nodemailer");

exports.post = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAILACCOUNT,
      pass: process.env.GMAILPW
    }
  });
  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Sleuth - Password Reset" <sleuth.reset@gmail.com>', // sender address
    to: req.body.email, // list of receivers
    subject: "password reset", // Subject line
    html: `<b>Password reset</b><br><br>

    <p>Please click <a href = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br'> here </a> it and create a new password. <br>
  <p>This link is valid for one hour. </p>
` // html body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
  res.json("im reseting a password");
};
