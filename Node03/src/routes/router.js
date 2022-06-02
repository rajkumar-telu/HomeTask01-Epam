import { Router } from 'express';
import controller from '../controller/controller';
import validateUser from '../middleware/validateUser';

export const router = Router();

router.get('/getUsers', controller.getUsers);
router.get('/getUser/:id', controller.getUserById);
router.post('/createUser', validateUser, controller.createUser, controller.getUsers);
router.put('/updateUser/:id', validateUser, controller.updateUser, controller.getUsers);
router.delete('/deleteUser/:id', controller.deleteUser, controller.getUsers);
router.get('/getAutoSuggestUsers/:loginSubstring/:limit', controller.autoSuggest);

