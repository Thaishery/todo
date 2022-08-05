import React, { Component } from 'react'
import { useState } from 'react'

const Todo = ()=>{
  const [todo, setTodo] = useState([])
  const [todoInput, setTodoInput] = useState("")

  const setTodoElement = (e)=>{
    setTodoInput(e.target.value)
  }
  const setInput =()=>{
    setTodo([...todo, {id: todo.length, status:false,task:todoInput}])
  }
  const changeTaskStatus = (task, e) =>{
    const newTodo = todo
    newTodo[task.id] = {id: task.id, status: e.target.checked, task:task.task}
    setTodo(newTodo)
  }

  return (
    <>
      <h1>Bienvenu sur le Todo: </h1>
      <input type="text" value={todoInput} onChange={(e)=>setTodoElement(e)}></input>
      <button type="button" onClick={setInput}>Ajouter</button>
      {todo.length >0 &&
      <ul style={{listStyle : "none"}}>{
        todo.map(task=>{
          return(<li key={task.id}> <input type="checkbox" value={task.status} onChange={(e)=>{changeTaskStatus(task,e)}}></input>{task.task}</li>)
        })
      }
      </ul>
      }
    </>
  )
}

export default Todo