import { Router } from "express";
const router = Router();
import registerController from '../controllers/registerController';

router.post('/', registerController.handleNewUser);

module.exports = router;