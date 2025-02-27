// works correctly

const fetchData = () => {
    return new Promise((resolve, reject) => {
        resolve('peanut butter')
    })
}

/* not working 

let myPromise = new Promise(resolve, reject){
    fetch("http://localhost:8080/peanut-butter", {
        "method": "GET",
        // "headers": {
        //   "user-agent": "vscode-restclient"
        // }
    })
        .then(response => {
            console.log(response);
            resolve(response)
        })
        .catch(err => {
            console.error(err);
            reject(err)
        });
}

let myPromise = new Promise((resolve, reject) => {
    fetch("http://localhost:8080/peanut-butter", {
        "method": "GET",
        // "headers": {
        //   "user-agent": "vscode-restclient"
        // }
    })
        .then(response => {
            console.log(response);
            resolve(response)
        })
        .catch(err => {
            console.error(err);
            reject(err)
        });
}).then((data) => {
  return data;
});


const fetchData = () => {
    return myPromise

    // return new Promise((resolve, reject) => {
    //     resolve('peanut butter')
    // })
}
*/



module.exports = fetchData;