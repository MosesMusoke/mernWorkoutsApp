const express = require('express')
require('dotenv').config()
const workoutRoutes = require('./routes/workoutRoutes')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to mongoDB successfully App listening on port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.error(error);
    })

//home route handler
app.get('/', (req, res) => {
    res.send('am done mann')
})




