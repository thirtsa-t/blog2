
import postData from '../model/blogpostmodel.js';
const posts = [];
class blogpostcontroller {

    static blogpost = (req, res) => {
        const blogId = posts.length + 1;
        const timestamps = new Date(Date.now())
        let {
            title,
            content,
            userid

        } = req.body;
        const post = new postData(blogId, title, content, timestamps, userid);
        posts.push(post);
        const data = posts.find(post => post.blogId === blogId);
        if (!data) {
            return res.status(417).json({
                status: 417,
                message: "blog failed",


            })

        }
        return res.status(201).json({
            status: 201,
            message: "blog created successful",
            data
        })
    }

    static getAllBlog = (req, res) => {
        const data = posts;
        return res.status(200).json({
            status: 200,
            message: "getallblog",
            data
        })
    }
    static getOneBlog = (req, res) => {
        const blogId = req.params.id;
        const data = posts.find(post => post.blogId === parseInt(blogId));
        return res.status(200).json({
            status: 200,
            message: "getOneblog",
            data
        })
    }
    static deleteallpost = (req, res) => {
        const blogId = req.params.id;
        const data = posts.findIndex(post => post.blogId === parseInt(blogId));




    }
    static deleteOnepost = (req, res) => {
        const blogId = req.params.id;
        const data = posts.findIndex(post => post.blogId === parseInt(blogId));


        if (data === -1) {
            return res.status(417).json({
                status: 417,
                message: "post failed to delete",
            })

        }
        posts.splice(data, 1)
        return res.status(200).json({
            status: 200,
            message: "post successfully deleted",
            data
        })


    }
    static deletallBlog = (req, res) => {

        const data = posts.splice
        return res.status(200).json({
            status: 200,
            message: "deletepost",
            
        })
    }
    static updateOneBlog =(req,res)=>{
        const blogId = parseInt(req.params.id);
        const dataIndex = posts.findIndex(post =>post.blogId===parseInt(blogId));
        
         if(dataIndex ===-1){
             return res.status(404).json({
                 status:404,
                 message:"not found",
                 data
             });
         }
    let {
        title,
        content,
        timestamp,
        userid
    }=req.body;
    const post = new postData(blogId,title,content,timestamp,userid);
    posts[dataIndex]=post;
    const data = posts.find(post=>post.blogId===blogId);
    if(!data){
        return res.status(417).json(
            {
               status:417,
               message:"post failed to be updated",
               data
            }
        )
    }
    return res.status(200).json(
        {
            status:200,
            message:"post updated is successfull",
            data
        })
    }
    }
    



    






export default blogpostcontroller;

