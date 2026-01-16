import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try{
        const {username, email, password } = req.body;

        const createUser = await User.create({username, email, password});

        res.status(201).json({message: "Created new user"});
    } catch(error){
        if(error.name === 'ValidationError'){
            const message = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({message: message[0]});
        }

        console.log("error in createUser controller", error);
        res.status(500).json({message: "internal server error"});
    }
    
}

export const login = async (req, res) => {
    try{
        const { identifier, password } = req.body;

        const user = await User.findOne({
            $or: [{email: identifier}, {username: identifier}]
        }); 

        if(!user){
            return res.status(401).json({message: "User not found"})
        };

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({message: "Wrong Password"})
        };

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000
        }).json({
            message: "Logged in successfully",
            username: user.username
        });
    } catch(error){
        console.log(error);
        res.status(500).json({message: "Server error"});
    }
}

export const logout = (_, res) => {
    res.clearCookie('token').json({message: "Logged out"});
}