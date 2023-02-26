const express = require('express')
const router = express.Router();
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/user.js')

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

module.exports = router