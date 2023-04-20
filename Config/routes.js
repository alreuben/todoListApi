
const TodoController = require('../Controllers/TodoController')

const routes = (app) => {

    app.get('/todo' , TodoController.getAllTodos)

    app.get('/todo/:id', TodoController.getTodoById)

    app.put('/todo', TodoController.updateTodo)

    app.delete('/todo', TodoController.deleteTodo)

    app.post('/todo', TodoController.addNewTodo)
}

module.exports = routes
