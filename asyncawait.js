// Async/Await

const fetchData = async () => {
    const x = new Promise(async (resolve, reject) => {
        const data = await fetch("http://localhost:8080/peanut-butter", {
            "method": "GET"
            // "headers": {
            //   "user-agent": "vscode-restclient"
            // }
        })
        console.log("############",data);
    })



}

module.exports = fetchData