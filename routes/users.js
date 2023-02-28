const express = require('express')
const router = express.Router(); 
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/user.js')


router.get('/all', getAllUsers)
router.post('/create', createUser)
router.get('/user/:id', getUser)
router.delete('/delete/:id', deleteUser)
router.patch('/update/:id', updateUser)



module.exports = router