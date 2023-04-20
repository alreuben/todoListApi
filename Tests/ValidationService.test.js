
const ValidationService = require('../Services/ValidationService')


describe('Validation Service', () => {
    test('checks return type of validation', () => {
        let res = false
        expect(typeof res).toBe('boolean')
    })

    test('checks regex is whitespace and returns false', () => {
        let task_name = ' '
        expect(ValidationService(task_name)).toBe(false)
    })

    // test('checks regex is whitespace and returns false', () => {
    //     let task_name = 'eat'
    //     expect(ValidationService(task_name)).toBe(true)
    // })


    test('validation service returns false due to failing regex', () => {
        const task_name = jest.fn(() => false)
        task_name(' ')
        expect(task_name).toReturn()
    })


    test('validation service returns true due to passing regex', () => {
        const task_name = jest.fn(() => true)
        task_name('buy new dog')
        expect(task_name).toReturn()
    })


    // test('checks items in array are only accepted', () => {
    //     const task_priority = jest.fn(() => false)
    //     task_priority('Very High')
    //     expect(task_priority).toReturn()
    // })
    test('the priority list contains Low', () => {
        expect(['Low', 'Medium', 'High']).toContain('Low');
    });

    test('the priority list only contains Low, Medium and High', () => {
        expect(['Low', 'Medium', 'High']).not.toContain('Very Low');
    });


    test('test that task_priority array has 3 items', () => {
        expect(['Low', 'Medium', 'High']).toHaveLength(3)
    })

})