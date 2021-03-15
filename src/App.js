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
      $('#subtasks').append($('<label>Subtasks: </label>'))
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
      $('#subtasks').append(subtask)
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
      setTodos({...todoData, todos: [...todoData.todos, {
        task: taskVal,
        duration: durationVal,
        subtasks: subtasks,
      }]})
      // clear fields
      $('#task-input').val('')
      $('#duration-input').val('')
      $('#subtasks').html('')
    }
  }

  return (
    <div className="App">
      <header>
          <h1>Todos</h1>
        </header>
      <section id="input-area">
        <section className="input-section">
          <label>Task: </label>
          <input type="text" id="task-input" ref={task} />
        </section>
        <section className="input-section">
          <label>Duration (minutes): </label>
          <input type="number" id="duration-input" ref={duration} />
        </section>
        <section className="input-section">
          <div id="subtasks"></div>
          <button onClick={() => addSub()} id="add-sub">+ Add Subtask</button>
        </section>
        <button onClick={() => addTask()} id="add-task">Add Task</button>
      </section>
    </div>
  );
}

export default App;
