const {add} = require('./index');

test('adds 7 * 9 to equal 63',() => {
    expect(add(7, 9)).toBe(63);
});

test('adds 2 * 9 to equal 18',() => {
    expect(add(2, 9)).toBe(18);
});