import Express from 'express';
import { getUser, login, createUser, deleteUser } from '../controllers';
const userRouter = Express.Router();

userRouter.get('/check', getUser);

userRouter.delete('/delete', deleteUser);

userRouter.get('/login', login);

userRouter.post('/add', createUser);

export {
  userRouter
};
