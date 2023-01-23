import {Router} from 'express'
const router =Router();
import handleLogout from 'controllers/logoutController';
router.get('/', handleLogout);

module.exports = router;