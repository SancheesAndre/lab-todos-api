import React from "react"
import { Row, Col } from 'react-bootstrap';
import Task from "./Task";

const TodoList = (props) => {
    const { tasks } = props
    return (
        <div>
            <Row>
                <Col>
                    {
                        tasks.map(task => {
                            return <Task
                                key={task._id}
                                id={task._id}
                                title={task.title}
                                completed={task.completed}
                            />
                        })
                    }
                </Col>
            </Row>
        </div>
    )
}

export default TodoList