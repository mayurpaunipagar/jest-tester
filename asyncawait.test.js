const fetchData = require("./asyncawait")

test('the data is peanut butter : async await', async() => {
   const data= await fetchData();
   data.body1={
    "key2": "peanut butter 2",
    "key": "peanut butter"
  }
   console.log("printing the response :",data);
   console.log("printing the expected response : ",data.body1)
   expect(data.body1.key).toBe('peanut butter');
})
