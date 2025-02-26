const compileAndroid=require('./complieAndroid');

test('compiling android goes as expected',()=>{
    expect(()=> compileAndroid()).toThrow();
})