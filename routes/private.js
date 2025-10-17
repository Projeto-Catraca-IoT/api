// private.js
import express from 'express';
import { locations as locationsController } from '../controllers/auth.js';
import { locationsCreate as locationsCreateController, locationsEdit as locationsEditController, locationsDelete as locationsDeleteController } from '../services/locations.js';

import { auth } from '../middlewares/auth.js';

export const router = express.Router();

//Rota para ver locais do usuário logado
router.get('/auth/locations', auth, locationsController);

//Rota para criar local novo
router.post('/locations', auth, locationsCreateController);

//Rota editar locais
router.put('/locations/:id', auth, locationsEditController);

//Rota para deletar locais
router.delete('/locations/:id', auth, locationsDeleteController);