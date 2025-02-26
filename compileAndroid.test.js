const compileAndroid=require('./complieAndroid');

test('compiling android goes as expected',()=>{
    expect(()=> compileAndroid()).toThrow();
    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroid()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroid()).toThrow(/JDK/);

    // Or you can match an exact error message using a regexp like below
    expect(() => compileAndroid()).toThrow(/^you are using the wrong JDK$/); // Test fails -> in my case this passes 
    // expect(() => compileAndroid()).toThrow(/^you are using the wrong JDK!$/); // Test pass -> in my case this fails
})