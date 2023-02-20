const User = require('../models/User.js')

const getAllUsers = async (req, res) =>{
    try {
        const user = await User.find({})
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({error})
    }
   
}

const createUser = async(req, res) =>{

    try {
        const user = await User.create(req.body)
        res.status(200).json({user})

    } catch (error) {
        res.status(400).json({error})
    }
}

const getUser = async(req, res) =>{
    try {
        const {id:idUser} = req.params
        const singleUser = await User.findOne({_id: idUser})
        if(!singleUser){
            return res.status(404).json({msg: `No tasks with the id : ${idUser}`})
        }
        res.status(200).json({singleUser})  
    }catch (error) {
        res.status(500).json({error})
    }
}

const updateUser = async(req, res) =>{

    try {
        const {id: idUser} = req.params
        const singleUser = await User.findOneAndUpdate({_id: idUser}, req.body, {
            new: true, 
            runValidators: true, 
        })
        if(!singleUser){
            return res.status(404).json({msg: `No tasks with the id : ${idUser}`})
        }
        res.status(200).json({singleUser})
    } catch (error) {
        res.status(500).json({error})
    }
}

const deleteUser = async (req, res) =>{
    try {
        const {id: idUser} = req.params
        const user = await User.findOneAndDelete({_id: idUser})
        if(!user){
            res.status(404).json({msg : `No users with the current id ${idUser}`})
        }
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    createUser,
}