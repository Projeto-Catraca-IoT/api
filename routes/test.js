import express from 'express';
import {testConnection} from '../controllers/test.js';

export const router = express.Router();

router.post('/test', testConnection);