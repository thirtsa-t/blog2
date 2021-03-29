import express from 'express';
import Usercontroller from '../controller/Authcontroller.js';

 const router = express.Router();
 router.post('/auth/signup', Usercontroller.Usercontroller.signup);
 router.post('/auth/signin', Usercontroller.Usercontroller.signin);



 export default router;