const add = (a, b) => a + b
const genGreet = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(2, 3)
    // if (result !== 5) {
    //     throw new Error(`Add 2 + 3, result: ${result}, expected 5`)
    // }
    expect(result).toBe(5)
})

test('should generate greeting with name', () => {
    const result = genGreet('David')
    expect(result).toBe('Hello David!')
})

test('should generate greeting with no name', () => {
    const result = genGreet()
    expect(result).toBe('Hello Anonymous!')
})