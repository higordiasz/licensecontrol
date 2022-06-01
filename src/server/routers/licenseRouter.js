import Express from 'express';
import { addLicense, checkLicense, removeLicense, getExpirationDate } from '../controllers';
const licenseRouter = Express.Router();

licenseRouter.get('/check', checkLicense);

licenseRouter.delete('/delete', removeLicense);

licenseRouter.get('/expiration', getExpirationDate);

licenseRouter.post('/add', addLicense);

export {
  licenseRouter
};
