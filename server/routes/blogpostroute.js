import express from 'express';
import { verifyAuth } from '../middleware/authverification.js';
import blogpostcontroller from '../controller/blogpostcontroller.js';

 const blogrouter = express.Router();
 blogrouter.post('/blog/create',verifyAuth,blogpostcontroller.blogpost);
 blogrouter.get('/blog/all' ,verifyAuth , blogpostcontroller.getAllBlog);
 blogrouter.get('/blog/one/:id' ,verifyAuth, blogpostcontroller.getOneBlog);
  blogrouter.get ('/blog/delete/:id',verifyAuth, blogpostcontroller.deleteOnepost);
 blogrouter.get ('/blog/delete',verifyAuth, blogpostcontroller.deleteallpost);
 blogrouter.patch ('/blog/updateOneBlog/:id',verifyAuth, blogpostcontroller.updateOneBlog);


 



 export default blogrouter;