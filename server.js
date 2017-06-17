const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser')
const sendgrid = require('sendgrid')(process.env.SENDGRID_KEY)

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

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

app.listen(port);
console.log('Server started');
