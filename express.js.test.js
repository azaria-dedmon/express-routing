const {mean, median, mode} = require('./expressRouteFunctions')

describe('test mean function', () => {
    test('mean should calculate the mean of an object of numbers', () => {
        const nums = mean({ nums: '1,2,3' })
        expect(nums).toEqual(2)
    })
})

describe('test median function', () => {
    test('median should calculate the median of an object of numbers', () => {
        const nums = median({ nums: '1,2,3,4,5' })
        expect(nums).toEqual(3)
    })
})

describe('test mode function', () => {
    test('mode should calculate the mode of an object of numbers', () => {
        const nums = mode({ nums: '1,2,3,4,5' })
        expect(nums).toEqual(0)
    })
})
