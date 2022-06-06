import Express from 'express';
import { getUser, login, createUser, deleteUser, alterPassword } from '../controllers';
const userRouter = Express.Router();

userRouter.get('/check', getUser);

userRouter.delete('/delete', deleteUser);

userRouter.post('/login', login);

userRouter.post('/create', createUser);

userRouter.put('/password', alterPassword);

export {
  userRouter
};

export default {
  userRouter
};
