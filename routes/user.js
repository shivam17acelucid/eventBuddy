import express from 'express';
const userRouter = express.Router();
import { getAllUsers, createUser, deleteUser } from '../controllers/user/index.js';

userRouter.get('/list', getAllUsers);
userRouter.post('/create', createUser);
userRouter.put('/delete', deleteUser);

export default userRouter;