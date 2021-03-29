import { generateAuthToken } from "../helpers/token.js";
import UserData from '../model/UserModel.js';
import bcrypt, { hashSync } from "bcrypt";
let Users = [];

let allUsers = [];
class Usercontroller {




    static signup = (req, res) => {

        const id = Users.length + 1;
        let {
            email,
            firstName,
            lastName,
            password,
            gender,
            rule,
            department,
            address

        } = req.body;
        password=bcrypt.hashSync(password,10);

        const isEmailExist = Users.find(user => user.email === req.body.email);
        if (isEmailExist) {
            return res.status(409).json({ status: 409, error: "email is duplicated" });

        }
        const user = new UserData(id, email, firstName, lastName, password, gender, rule, department, address);
        Users.push(user);

        allUsers = Users;

        const data = Users.find(user => user.email === email);
        if (!data) {
            return res.status(417).json({
                status: 417,
                message: "signup failed",
            })
           // else{
                //let{data,...datawithoutPassWord}=data

        }
        return res.status(201).json({
            status: 201,
            message: "account created succefully",
            data
        
        })
    }
    static signin = (req, res) => {
        let {
            email,
            password
        } = req.body;

        const isUserExist = Users.find(User => User.email === email);
        //const ispasswordExist= bcrypt.compareSync(password,isUserExist.password)  
        if (isUserExist && bcrypt.compareSync(password,isUserExist.password)) {
           const data = isUserExist;
            //  console.log(Users)
            const token = generateAuthToken({
                id: data.id,
                email: data.email,
                rule: data.rule,

            })
            
                let{password,...datawithoutpassword}=data

            return res.status(200).json({
                status: 200,
                message: "login is succefull",
                token: token,
                data:datawithoutpassword

            }

            )
        }
        return res.status(404).json({
            status: 404,
            message: "password failed",

        }

        )

    }



}


export default { Usercontroller, Users };

