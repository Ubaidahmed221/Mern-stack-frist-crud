import User from "../model/userModel.js";

export const create = async (req , res) =>{
    try{
        const newUser = new User(req.body);
        const {email} = newUser;

        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json({message: "User already exists."});

        }
        const savedData = await newUser.save();
        res.status(200).json(savedData);
    }
    catch(error){
        res.status(500).json({errorMessage: error.message});

    }
};

export const getAllUsers = async (req, res) =>{
    try{
        const userdata = await User.find();
        if(userdata && userdata.length == 0){
            return res.status(404).json({message: "User data not found."});
        }
        res.status(200).json(userdata);
    }
    catch(error){
        res.status(500).json({errorMessage: error.message});

    }
}