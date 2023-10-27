const express = require('express')

const {createANewWorkout, getAllWorkouts, getSpecificWorkout, updateASpecificWorkout, deleteASpecificWorkout} = require('../controllers/workoutController')

const router = express.Router()


router.get('/', getAllWorkouts)

router.get('/:id', getSpecificWorkout)

router.post('/', createANewWorkout)

router.put('/:id', updateASpecificWorkout)

router.delete('/:id', deleteASpecificWorkout)
// 

module.exports = router
