
const ValidationService = (task_name, task_priority) => {

    let strRegex = /^\s*$/
    let task_priority_options = ['Low', 'Medium', 'High']

    if(!strRegex.test(task_name) && task_priority_options.includes(task_priority)) {
        return true
    } else {
        return false
    }
}

module.exports = ValidationService
