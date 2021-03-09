// import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import React, { useRef } from 'react'

function App() {

  const duration = useRef()
  const task = useRef()

  const addSub = () => {
    const subtask = document.createElement('input')
    subtask.className = 'subtask'
    document.getElementById('subtasks').append(subtask)
  }

  const addTask = () => {

    if (duration.current.value && task.current.value) {
      // store task
    }
  }

  return (
    <div className="App">
      <section id="main-area">
        Task:  <input type="text" ref={task} />
        <br/><br/>
        Duration (minutes): <input type="number" ref={duration} />
        <br/><br/>
        <div id="subtasks"></div>
        <button onClick={() => {
          console.log('adding')
          addSub()
          }} id="add_sub">+ Add Subtask</button>
        <button onClick={() => addTask()}>Add Task</button>
      </section>
    </div>
  );
}

export default App;
