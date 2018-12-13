require("env2")("./config.env");
const nodemailer = require("nodemailer");
const verifyEmail = require("./database/queries/verifyEmail");
const setResetPasswordToken = require("./database/queries/setResetToken");

const createToken = () =>
  new Promise((resolve, reject) => {
    require("crypto").randomBytes(48, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(buffer.toString("hex"));
      }
    });
  });

const sendEmail = (email, url, token) => {
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
    to: email, // list of receivers
    subject: "password reset", // Subject line
    text:
      "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
      "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
      "http://" +
      url +
      "/reset/" +
      token +
      "\n\n" +
      "If you did not request this, please ignore this email and your password will remain unchanged.\n" // html body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
};

exports.post = (req, res) => {
  let resetToken = "";
  verifyEmail(req.body.email)
    .then(() => {
      createToken()
        .then(token => {
          resetToken = token;
          setResetPasswordToken(token, Date.now() + 3600000, req.body.email);
        })
        .then(() => {
          sendEmail(req.body.email, req.headers.host, resetToken);
        })
        .then(() => {
          res.status(200);
          res.send(
            `An email has been sent to ${
              req.body.email
            }. Please check your inbox.`
          );
        });
    })
    .catch(err => {
      res.status(404);
      res.send("There is no account registered with that email address");
      console.log("Error in reset-password: " + err);
    });
};
