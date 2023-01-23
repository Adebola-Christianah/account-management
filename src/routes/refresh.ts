import {Router} from 'express';
const router =Router();
import refreshTokenController from '../controllers/refreshTokenController'

router.get('/', refreshTokenController.handleRefreshToken);

module.exports = router;