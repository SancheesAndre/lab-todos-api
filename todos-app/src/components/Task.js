import React from "react"
import { FaRegTrashAlt } from 'react-icons/fa';
import './Task.css'

const Task = (props) => {
    const { id, title, completed} = props

    return (
        <div className="task">
            <input type="checkbox" />
            <p>{title}</p>
            <FaRegTrashAlt className="closeBtn"/>
        </div>
    )
}

export default Task