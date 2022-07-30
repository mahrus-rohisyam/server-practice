import express from 'express'
import { getUser, loginUser, registerUser } from '../controllers';

const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/get', getUser)

export = router