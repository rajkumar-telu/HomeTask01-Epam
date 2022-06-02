import { Router } from 'express';
import validateUser from '../middlewares/validateUser';
import validateExistingUser from '../middlewares/validateExistingUser';
export const router = Router();

import { getUsers, getUserById, createUser, updateUser, deleteUser, getAutoSuggestUsers } from '../controller/routeController';

router.get('/getUser/:id', getUserById);
router.get('/getUsers', getUsers);
router.post('/createUser', validateUser, createUser, getUsers);
router.put('/updateUser/:id', validateExistingUser, updateUser, getUsers);
router.delete('/deleteUser/:id', deleteUser, getUsers);
router.get('/getAutoSuggestUsers/:loginSubstring/:limit', getAutoSuggestUsers);

