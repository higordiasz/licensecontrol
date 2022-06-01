import Express from 'express';
import Mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const App = Express();

//Model Declaration
import { User } from '../models/user';
import { License } from '../models/license';

//Database Connection
Mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = Mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose default connection is open');
});

db.on('error', err => {
  console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log(
      'Mongoose default connection is disconnected due to application termination'
    );
    process.exit(0);
  });
});

//Use HTTPS
App.use((req, res, next) => {
  if ((req.headers["x-forwarded-proto"] || "").endsWith("http"))
    res.redirect(`https://${req.headers.host}${req.url}`);
  else
    next();
});

//Routers
import { userRouter } from '../routers/userRouter';
import { licenseRouter } from '../routers/licenseRouter';

App.use('/api/user', userRouter);
App.use('/api/license', licenseRouter);

export {
  App
};

export default {
  App
};
