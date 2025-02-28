module.exports = async () => {
    const response = await fetch("http://localhost:8080/peanut-butter", {
        "method": "GET",
        "headers": {
            //   "user-agent": "vscode-restclient"
        }

    });
    return response;
}
