import express from 'express';
import { get } from '../controllers/issLocationController';
const router = express.Router();

router.get('/', get);

export default router;
