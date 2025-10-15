import express from 'express';
import {login as loginController, register as registerController} from '../controllers/auth.js';

import {register} from '../middlewares/register.js'
import {login} from '../middlewares/login.js'

export const router = express.Router();

//Register and login route
router.post('/auth/register', register, registerController);
router.post('/auth/login', login, loginController);