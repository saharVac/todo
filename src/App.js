// import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import React, { useRef } from 'react'

function App() {

  const duration = useRef()
  const task = useRef()

  const addSub = () => {
    let canAdd = true
    const subLength = document.getElementsByClassName('subtask').length
    const subtask = document.createElement('input')
    subtask.classList.add('subtask')
    if (!subLength) {
      subtask.id = 'subtask-1'
    } else {
      const lastSubNum = subLength
      const nextSubNum = subLength + 1
      // if last subtask is empty, dont add another
      const lastSub = document.getElementById('subtask-' + lastSubNum.toString())
      if (!lastSub.value) {
        canAdd = false
      }
      subtask.id = 'subtask-' + nextSubNum.toString()
    }
    if (canAdd) {
      document.getElementById('subtasks').append(subtask)
    }
    
  }

  const addTask = () => {

    if (duration.current.value && task.current.value) {
      // store task
    }
  }

  return (
    <div className="App">
      <section id="main-area">
        <div>
          Task:  <input type="text" ref={task} />
        </div>
        <div>
          Duration (minutes): <input type="number" ref={duration} />
        </div>
        <div id="subtasks"></div>
        <button onClick={() => addSub()} id="add_sub">+ Add Subtask</button>
        <button onClick={() => addTask()}>Add Task</button>
      </section>
    </div>
  );
}

export default App;
