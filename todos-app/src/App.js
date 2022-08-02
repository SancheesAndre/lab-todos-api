import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';

function App() {
  const [tasks, setTasks] = useState([]) 

  useEffect(() => {
    axios.get('http://localhost:3001/todos')
      .then(response => {
        setTasks(response.data)

      })
      .catch(error => console.log(error))
  }, [])


  return (
    <div className="App">
      <Container>
        <header className="">
          <h1>Todo's API</h1>
        </header>
        <TodoForm />
        <TodoList tasks={tasks}/>
      </Container>
    </div>
  );
}

export default App;
