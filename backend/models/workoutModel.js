// A schema is used to define the structure of the documents that are going to be stored in a particular collection.
// A model is what we use to interact with the database.

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    }
}, {timestamps:true} )

// we name the model Workout but mongoose is going to automatically make for us a Workouts collection in the database.
module.exports = mongoose.model('Workout', workoutSchema)

