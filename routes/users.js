const express = require('express')
const router = express.Router();
const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/user.js')

// router.route('/').get(getAllUsers).post(createUser)
// router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

module.exports = router