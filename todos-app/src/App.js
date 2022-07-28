import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react';
import './App.css';

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
      <div>
        <header className="Header">
          <h1>Todos API</h1>
          {
            tasks.map(task => {
              return (
                <div key={task._id} className="container">
                  <h1>{task}</h1>
                </div>
              )
            })
          }
        </header>
      </div>

    </div>
  );
}

export default App;
