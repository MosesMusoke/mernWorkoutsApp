import React from 'react'

const WorkoutDetails = ({workout}) => {

  const handleClick = () => {
    const deleteFromDatabase = async () => {
      const response = await fetch('/api/workouts/' + workout._id, {
        method:"DELETE"
      })
      console.log(response);
      const json = await response.json()

      if (response.ok) {
        console.log('workout deleted');
      }
      else {
        console.log(json.error);
      }
    }

    deleteFromDatabase()

    window.location = '/'
  }

  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <span onClick={handleClick}>DELETE</span>
    </div>
  )
}

export default WorkoutDetails