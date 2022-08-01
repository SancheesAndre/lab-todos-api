import mongoose from 'mongoose'

const { Schema, model } = mongoose

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    completed: {
        type: Boolean,
        default: false,
        required: true,
    }   
},
{timestamps: true}
)

const Task = model("Tasks", taskSchema)

export default Task