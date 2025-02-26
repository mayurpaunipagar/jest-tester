test('null',()=>{
    const n1 = null;
    expect(n1).toBeNull();
    expect(n1).toBeDefined();
    const n2 = undefined;
    expect(n2).toBeUndefined();

    const n3 = 1===1
    expect(n3).toBeTruthy();
    expect(n2).toBeFalsy();

})

test('null',()=>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();

})

test('zero',()=>{
    const z=0;
    expect(z).not.toBeNull();
})