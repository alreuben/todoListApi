
const JsonResponseService = require('../Services/JsonResponseService')

// test('the todo list has a task', () => {
//     expect(JsonResponseService).toContain('task_name')
// })

test('format of returned JSON data', () => {
    expect(JsonResponseService('', [], 200)).toStrictEqual({"message": "", "data": [], "status": 200})
})

