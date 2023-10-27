const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')


async function getAllWorkouts (req, res) {
    try {
        const workouts = await Workout.find({}).sort({createdAt:-1})
        
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({msg:"an error occured"})
    }
    
}

async function getSpecificWorkout (req, res) {
    try {
        const id = req.params.id

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'no such workout'})
        }

        const workout = await Workout.findById(id)
        if (!workout){
            return res.status(404).json({msg:"There is no workout of that Id"})
        }

        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({msg:"an error occured"})
    }
    
}

async function createANewWorkout (req, res) {

    const {title, reps, load} = req.body

    try {
        const workout = await Workout.create({title, reps, load})

        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

async function deleteASpecificWorkout (req, res) {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const workout = await Workout.findByIdAndDelete({_id:id})

    if (!workout){
        return res.status(404).json({msg:"There is no workout of that Id"})
    }

    res.json({msg:"workout deleted successfully"})
}


async function updateASpecificWorkout (req, res) {
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'no such workout'})
    }

    const workout = await Workout.findByIdAndUpdate({_id:id}, {...req.body})

    if (!workout){
        return res.status(404).json({msg:"There is no workout of that Id"})
    }

    res.json({msg:"workout updated successfully"})
}




module.exports = {createANewWorkout, getAllWorkouts, getSpecificWorkout, updateASpecificWorkout, deleteASpecificWorkout}