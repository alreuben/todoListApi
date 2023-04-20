const { ObjectId} = require('mongodb')
const DbService = require('../Services/DbService')
const JsonResponseService = require('../Services/JsonResponseService')
const ValidationService = require('../Services/ValidationService')

const getAllTodos = async (req, res) => {
    let queryFilter = {}

    if('task_status' in req.query || 'task_priority' in req.query) {
        queryFilter.task_status = req.query.task_status == 'true' ? true : false
        queryFilter.task_priority = req.query.task_priority
    }
    const collection = await DbService()
    const data = await collection.find(queryFilter).toArray()
    let msg = "All todo tasks"
    res.json(JsonResponseService(msg, data))
}

const getTodoById = async (req, res) => {
    let id = new ObjectId(req.params.id)

    const collection = await DbService()
    const data = await collection.find({_id: id}).toArray()

    let msg = "Todo task by ID"
    res.json(JsonResponseService(msg, data))
}

const updateTodo = async (req, res) => {

    let id = new ObjectId(req.body.id)
    let task_name = req.body.task_name
    let task_status = req.body.task_status
    let task_priority = req.body.task_priority

    const collection = await DbService()
    const data = await collection.updateOne({_id: id}, {$set: {task_name, task_status, task_priority}})
    if(data.modifiedCount !== 0) {
        let msg = "Task updated"
        res.json(JsonResponseService(msg, data))
    } else {
        let msg = "Task NOT updated"
        let statusCode = 400
        res.json(JsonResponseService(msg, data, statusCode))
    }
}

const deleteTodo = async (req, res) => {

    let id = new ObjectId(req.body.id)

    const collection = await DbService()
    const data = await collection.deleteOne({_id: id})
    if(data.deletedCount !== 0) {
        let msg = "Task deleted"
        res.json(JsonResponseService(msg, data))
    } else {
        let msg = "This task no longer exists"
        let statusCode = 400
        res.json(JsonResponseService(msg, data, statusCode))
    }
}

const addNewTodo = async (req, res) => {
    let task_name = req.body.task_name
    let task_priority = req.body.task_priority

    if(!ValidationService(task_name, task_priority)) {
        return res.json({msg: "Invalid task name or priority"})
    }

    const collection = await DbService()
    const data = await collection.insertOne({task_name, task_status: false, task_priority})

    if(data.insertedId !== null) {
        let msg = "Task added"
        res.json(JsonResponseService(msg, data))
    } else {
        let msg = "Unable to add task"
        let statusCode = 400
        res.json(JsonResponseService(msg, data, statusCode))
    }
}

exports.getAllTodos = getAllTodos
exports.getTodoById = getTodoById
exports.updateTodo = updateTodo
exports.deleteTodo = deleteTodo
exports.addNewTodo = addNewTodo
