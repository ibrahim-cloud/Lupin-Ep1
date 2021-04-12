const winston = require('winston')
require('winston-mongodb');

const logConfiguration = {
    transports: [
      new winston.transports.Console(),
      new winston.transports.MongoDB({
        db: "mongodb://localhost/Brief_Lupin",
        options: { useUnifiedTopology: true },
      })
    ],
  };
  const loggger = winston.createLogger(logConfiguration);
  function AddLog(message, lavel, link) {
    var lg = loggger.log({
      message: message,
      level: [lavel],
      Date: new Date(),
      http: "127.0.0.1:" + 1099 + "/" + link,
    });
    return lg
  }
  
  module.exports = {AddLog}  