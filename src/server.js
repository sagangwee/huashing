import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
// import NotFoundPage from './components/NotFoundPage';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
// import config from './config';

// initialize the server and configure support for ejs templates
const app = Express();

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
}

const indexPath = path.join(__dirname, 'static/index-client.html');
app.get('*', (req, res) => res.sendFile(indexPath));
app.post('/contact', contact);

function contact(req, res) {
  // node mailer stuff
  const data = req.body;
  console.log(data);
  const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    }
  };

  var transporter = nodemailer.createTransport(smtpConfig);

  // setup e-mail data with unicode symbols
  var mailOptions = {
      from: data.email, // sender address
      to: 'huawang_usa@yahoo.com', // list of receivers
      subject: 'Huashing Acupuncture Contact Form', // Subject line
      html: `<b>Name: </b> ${data.name} <br>
             <b>Phone: </b> ${data.phone}
             <p>${data.message}</p>`
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
  res.sendStatus(200);
}

// start the server
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
