import connectDB from './config/db.config.js'
import express from 'express'
import Task from './models/Todo.js'
import cors from 'cors'
import dotenv from 'dotenv'

const EXPRESS_PORT = process.env.EXPRESS_PORT || 3001

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/todos', async (req, res) => {
    try {
        const tasks = await Task.find({})
        return res.status(200).json(tasks)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Status error' })
    }
})

app.post('/todos', async (req, res) => {
    try {
        const newTask = await Task.create(req.body)
        return res.status(201).json(newTask)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error while creating tasks' })
    }
})

app.put('/todos/:id', async (req, res) => {
    try {
        const payload = req.body
        const { id } = req.params

        const updatedTask = await Task.findOneAndUpdate({ _id: id }, payload, { new: true })
        res.status(200).json(updatedTask)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error while updating task' })
    }
})

app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        await Task.findOneAndDelete({ _id: id })

        res.status(204).json()
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server Status error' })
    }
})

app.listen(EXPRESS_PORT, () => console.log('Server listening on port: ', EXPRESS_PORT))