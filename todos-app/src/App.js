import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import './App.css';
import { FaWindowClose } from 'react-icons/fa';

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/todos')
      .then(response => {
        setTasks(response.data)

      })
      .catch(error => console.log(error))
  }, [])

  const clickar = () => {
    console.log('cliquei')
  }

  return (
    <div className="App">
      <Container >
        <div>
          <header className="Header">
            <h1>Todo's API</h1>
          </header>
        </div>
        <TodoForm />
        <TodoList />
        <div className="content">
          {
            tasks.map(task => {
              console.log(task.title)
              return (
                <div key={task._id} className="container">
                  <input type="checkbox" onChange={() => { clickar() }} />
                  <h1>{task.title}</h1>
                  <h1 className="closeBtnContainer">
                    <p className='closeBtn'><FaWindowClose onClick={clickar} /></p>
                  </h1>
                </div>
              )
            })
          }
        </div>
      </Container>
    </div>
  );
}

export default App;
