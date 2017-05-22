const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser')
const sendgrid = require('sendgrid')(process.env.SENDGRID_KEY)

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Request to SendGrid

app.post('/sendMessage', function(req,res){
  console.log('this is the message', req.body)
  var payload = req.body;
  payload.to = 'mariajose.tamayo@gmail.com';
  sendgrid.send(payload, function(err,json){
    if(err){
      return res.send('request failed');
    }
    else{
      console.log('it sent the message!')
      res.send('success!')
    }
  })
});

app.post('/submitCaptcha',function(req,res){
  // g-recaptcha-response is the key that browser will generate upon form submit.
  // if its blank or null means user has not selected the captcha, so return the error.
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
    return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
  }
  // Put your secret key here.
  var secretKey = process.env.RECAPTCHA_KEY;
  // req.connection.remoteAddress will provide IP address of connected user.
  var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
  // Hitting GET request to the URL, Google will respond with success or error scenario.
  request(verificationUrl,function(error,response,body) {
    body = JSON.parse(body);
    // Success will be true or false depending upon captcha validation.
    if(body.success !== undefined && !body.success) {
      return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
    }
    res.json({"responseCode" : 0,"responseDesc" : "Sucess"});
  });
});

app.listen(port);
console.log('Server started');
