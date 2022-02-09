const express = require('express')
const router = express.Router()
const {GetGoals, AddGoal, UpdateGoal, DeleteGoal} = require('../controllers/goalController')

router.get('/',GetGoals);

router.post('/', AddGoal);

router.put('/:id',UpdateGoal);

router.delete('/:id',DeleteGoal);

module.exports = router