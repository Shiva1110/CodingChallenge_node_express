const User = require('../models/user');

const getUsers = async (req,res) => {
    try{
        const users = await User.find();
        return res.send(users);
    }
    catch(err) {
        return res.send(err);
    }
}

const createUser = async (req,res) => {
    try {
        let user = new User(req.body);
        await user.save();
    }
    catch(err) {
        console.log(err);
    }  
}

const getUserDetails = async (req,res) => {
    try{
        const  user = await User.findById(req.params.userId)
        return res.send(user);
    }
    catch(err) {
        return res.send(err);
    }
}

const deleteUser = async (req,res) => {
    try{
        const removedUser = await User.deleteOne({ _id : req.params.userId});
        return res.send(removedUser);
    }
    catch(err) {
        return res.send(err);
    }
}

const updateUser = async (req,res) => {
    try{
        const updatedUser = await User.findOneAndUpdate({_id: req.params.userId}, {$set: req.body});
        return res.send(updatedUser);
    }
    catch(err){
        return res.send(err);
    }
}

module.exports = {
    getUsers,
    createUser,
    getUserDetails,
    deleteUser,
    updateUser
}