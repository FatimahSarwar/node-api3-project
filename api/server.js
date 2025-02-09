const express = require('express');
const userRouter = require('./users/users-router')
const server = express();

// remember express by default cannot parse JSON in request bodies
server.use(express.json());
server.use(logger);
// global middlewares and the user's router need to be connected here
server.use('/api/users', userRouter)


function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'Origin'
    )}`
  );

  next();
}


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
