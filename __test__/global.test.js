const text = 'Hello World';

test('Contains "World"', () => {
    expect(text).toMatch(/world/i);
});