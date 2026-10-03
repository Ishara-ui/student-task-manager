
import { useState } from 'react'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Web Assignment",
      completed: false
    },
    {
      id: 2,
      title: "DSA Assignment",
      completed: true
    },
    {
      id: 3,
      title: "React Practice",
      completed: false
    }
  ])

  const [taskTitle, setTaskTitle] = useState("")


 

  const totalTasks = tasks.length

  const completedTasks = tasks.filter(
    task => task.completed === true
  ).length

  const pendingTasks = totalTasks - completedTasks




  const addTask = () => {

    if (taskTitle.trim() === "") {
      return
    }

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false
    }

    setTasks([...tasks, newTask])

    setTaskTitle("")
  }


  

  const completeTask = (id) => {

    const updatedTasks = tasks.map((task) => {

      if (task.id === id) {
        return {
          ...task,
          completed: true
        }
      }

      return task
    })

    setTasks(updatedTasks)
  }




  const deleteTask = (id) => {

    const updatedTasks = tasks.filter(
      task => task.id !== id
    )

    setTasks(updatedTasks)
  }


  return (
    <div className="container">

      <h1>Student Task Manager</h1>

      <p className="subtitle">
        Manage your university tasks easily.
      </p>


   

      <div className="dashboard">

        <div className="card">
          <h3>Total Tasks</h3>
          <h2>{totalTasks}</h2>
        </div>

        <div className="card">
          <h3>Pending</h3>
          <h2>{pendingTasks}</h2>
        </div>

        <div className="card">
          <h3>Completed</h3>
          <h2>{completedTasks}</h2>
        </div>

      </div>


    

      <div className="add-task">

        <h2>Add New Task</h2>

        <input
          type="text"
          placeholder="Enter task title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <button onClick={addTask}>
          Add Task
        </button>

      </div>


    

      <div className="task-list">

        <h2>My Tasks</h2>

        {tasks.map((task) => (

          <div className="task-card" key={task.id}>

            <div>

              <h3>{task.title}</h3>

              <p>
                Status: {task.completed ? "Completed" : "Pending"}
              </p>

            </div>


            <div>

              {!task.completed && (
                <button
                  onClick={() => completeTask(task.id)}
                >
                  Complete
                </button>
              )}

              <button
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default App
