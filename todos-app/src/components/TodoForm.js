import React from "react"

const TodoForm = () => {
    return (
        <form>
            <div className="form-group">
                <input type="text" placeholder="Type your task"></input>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default TodoForm