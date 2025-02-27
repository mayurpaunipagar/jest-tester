const fetchData = require("./asynchronous");

test('the data is peanut butter',()=>{
    return fetchData().then(data=>{
        console.log({data})
        return  expect(data).toBe('peanut butter') //fails
    });
})

// test('the data is peanut butter : with url',()=>{
//     return fetchData('http://localhost:8080/peanut-butter', {
//         method: 'GET',
//         // headers: { 'Content-Type': 'application/json' },
//         // body: JSON.stringify({ name: 'John Doe', age: 30 }),
//       })
// })