const sum = require('./sum');

test('adds 1+2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
    const data = {
        one: 1
    }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 });
});

test('add positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
})

test('null', () => {
    const n1 = null;
    expect(n1).toBeNull();
    expect(n1).toBeDefined();
    const n2 = undefined;
    expect(n2).toBeUndefined();

    const n3 = 1 === 1
    expect(n3).toBeTruthy();
    expect(n2).toBeFalsy();

})

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

})

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
})

test("greaterThanAndLessThan", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

test("adding floating point numbers", () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); this will not work because of rounding error
    expect(value).toBeCloseTo(0.3); // this will work
})

/* Strings */

test('String tester1 : there is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

test('String tester2 : but there is a stop in "Christoph"', () => {
    expect('stop').toMatch(/stop/)
})


/*
Arrays and iterables
You can check if an array or iterable contains a particular item using toContain:
*/
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
]
test('Array1: shop list has milk on it',()=>{
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
})