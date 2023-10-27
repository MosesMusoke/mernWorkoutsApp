import React, { useState } from 'react'

const WorkoutsForm = () => {

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)


    const handlSubmit = async (e) => {
        e.preventDefault()

        const newWorkout = {title, load, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newWorkout)
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            // if the response is okay then reset the form back to default.
            setError(null)
            setLoad('')
            setReps('')
            setTitle('')
            console.log('New Workout Added', json);
        }

        window.location = '/'

    }

  return (
    
    <form className='create' onSubmit={handlSubmit}>
        <h3>Add a New Workout</h3>
        <label>Exercise Title: </label>
        <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
        <label>Load (in kg): </label>
        <input type='number' value={load} onChange={e => setLoad(e.target.value)}/>
        <label>Repetitions: : </label>
        <input type='text' value={reps} onChange={e => setReps(e.target.value)}/>
        <button>Add Workout</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutsForm