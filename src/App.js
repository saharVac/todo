// import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import $ from 'jquery'
import React, { useRef, useState } from 'react'

function App() {

  const duration = useRef()
  const task = useRef()

  const [todoData, setTodos] = useState({
    todos: []
  })

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
    const durationVal = $('#duration-input').val()
    const taskVal = $('#task-input').val()
    if (durationVal && taskVal) {
      // get all subtasks
      let subtasks = []
      $('.subtask').each((index, subtask) => {
        subtasks.push(subtask.value)
      })      
      // store task
      console.log("Task", taskVal, "Duration", durationVal, "subtasks", subtasks)
      setTodos({...todoData, todos: [...todoData.todos, {
        task: taskVal,
        duration: durationVal,
        subtasks: subtasks
      }]})
    }
  }

  return (
    <div className="App">
      <section id="main-area">
        <div>
          Task:  <input type="text" id="task-input" ref={task} />
        </div>
        <div>
          Duration (minutes): <input type="number" id="duration-input" ref={duration} />
        </div>
        <div id="subtasks"></div>
        <button onClick={() => addSub()} id="add_sub">+ Add Subtask</button>
        <button onClick={() => addTask()}>Add Task</button>
      </section>
    </div>
  );
}

export default App;
