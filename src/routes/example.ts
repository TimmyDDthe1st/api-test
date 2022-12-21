import express from 'express';
import { get } from '../controllers/exampleController';
const router = express.Router();

router.get('/', get);

export default router;
